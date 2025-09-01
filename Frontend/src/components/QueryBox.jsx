import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function QueryBox({ onSubmit }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log(query);
      navigate(`/chat${query ? `?query=${encodeURIComponent(query)}` : ""}`);
      //navigate("/chat", { state: { userQuery: query } });
    }
  };

  return (
    <input
      className="font-poppins text-xl w-[50rem] p-2 mr-4 focus:outline-none placeholder-white"
      placeholder="Ask me anything!"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
}