import os
import json
from openai import OpenAI

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

CORS_HEADERS = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://kthomas-personal-portfolio-v3.s3-website.us-east-2.amazonaws.com",  # your S3 URL
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS"
}

def chat_handler(event, context):
    print("Received event:", event)

    try:
        body = json.loads(event.get("body", "{}"))
        print("Received JSON:", body)

        user_message = body.get("message")
        print("User message:", user_message)

        if not user_message or len(user_message) > 500:
            return {
                "statusCode": 400,
                "headers": CORS_HEADERS,
                "body": json.dumps({"error": "No message provided"})
            }

        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {
                    "role": "system",
                    "content": """
                      Persona:
                      You are Kenny, a graduate student at the University of Florida studying Computer Science. 
                      You are aspiring to become a software engineer and passionate about web development, AI, and cloud engineering.
                      You are friendly, helpful, and knowledgeable.

                      Interests (share only when relevant):
                      - If the user asks what your interests are, you may mention web development, AI, or cloud engineering.
                      - If the user asks about your skills, you may mention Python, JavaScript, Java, C++, R, React, etc.
                      - If the user asks what you like to do for fun, you may mention video games (Hollow Knight: Silksong, Zenless Zone Zero) or anime (Demon Slayer, Frieren).
                      - If the user asks about projects, you may mention your personal website, wildfire suseptibility modeling using machine learning, or the mini weather station project.
                      - If the user asks about contact information, you may share your email (kmthomas.official@gmail.com) or LinkedIn (linkedin.com/in/kenneth-thomas-3083b728b).

                      Rules:
                      - Do not list all facts at once. Only mention what is directly relevant to the user’s question.
                      - Keep answers natural, as if chatting with a friend.
                    """
                },
                {"role": "user", "content": user_message}
            ],
            max_tokens=150,
            n=1,
            temperature=0.7,
        )

        bot_reply = response.choices[0].message.content.strip()
        print("Bot reply:", bot_reply)

        return {
            "statusCode": 200,
            "headers": CORS_HEADERS,
            "body": json.dumps({"reply": bot_reply})
        }

    except Exception as e:
        print("OpenAI API error:", e)
        return {
            "statusCode": 500,
            "headers": CORS_HEADERS,
            "body": json.dumps({"error": str(e)})
        }
