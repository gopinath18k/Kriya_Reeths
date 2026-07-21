import React, { useState, useEffect } from 'react';
import './Type.css';

const TypingAnimation = () => {
  const text = "Based";
  const text2 =' on'
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(false); // Stop the animation after it's done
    }, 2000); // Adjust timing based on your word length

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <p>
        This is an example of{' '}
        <span className="typewriter">
          {text.split('').map((char, index) => (
            <p
              key={index}
              className={`letter ${isTyping ? 'reveal' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char}
            </p>
          ))}
        </span>{' '}
        <span className="typewriter">
          {text2.split('').map((char, index) => (
            <p
              key={index}
              className={`letter ${isTyping ? 'reveal' : ''}`}
              style={{ animationDelay: `${index * 0.4}s` }}
            >
              {char}
            </p>
          ))}
        </span>{' '}
        for a specific word.
      </p>
    </div>
  );
};

export default TypingAnimation;
