import React from "react";

export default function StaggeredWords({
  text,
  perWord = 80,     // ms between words
  initialDelay = 0,  // ms before first word
  className = "",
}) {
  const words = text.split(/\s+/);

  return (
    <p className={`flex flex-wrap gap-x-1.25 ${className}`} aria-label={text}>
      <style>{`
        @keyframes riseFadeIn {
          from { 
            transform: translateY(0.4em);
            opacity: 0;
            filter: blur(2px);
          }
          to {
            transform: translateY(0);
            opacity: 1;
            filter: blur(0);
          }
        }
        .word-reveal {
          opacity: 0;
          display: inline-block;
          animation: riseFadeIn 420ms cubic-bezier(.2,.8,.2,1) forwards;
        }
      `}</style>

      {words.map((w, i) => (
        <span
          key={i}
          className="word-reveal"
          style={{ animationDelay: `${initialDelay + i * perWord}ms` }}
        >
          {w}
        </span>
      ))}
    </p>
  );
}
