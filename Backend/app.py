from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

app= Flask(__name__)
CORS(app)

api_key = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=api_key)

@app.route("/chat", methods=["POST"])
def chat():
  data = request.json
  print("Received JSON:", data)
  user_message = data.get("message")
  print("User message:", user_message)

  if not user_message or len(user_message) > 500:
    return jsonify({"error": "No message provided"}), 400

  try:
    response = client.chat.completions.create(
            model = "gpt-3.5-turbo",
            messages = [
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
            max_tokens = 150,
            n = 1,
            temperature = 0.7,
    )
    bot_reply = response.choices[0].message.content.strip()
    print("Bot reply:", bot_reply)
    return jsonify({"reply": bot_reply})
  except Exception as e:
    print("OpenAI API error:", e)
    return jsonify({"error": str(e)}), 500
  
if __name__ == "__main__":
  app.run(debug=True, port=5001)