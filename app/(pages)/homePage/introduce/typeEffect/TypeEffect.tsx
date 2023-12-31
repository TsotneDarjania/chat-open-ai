"use client";
import Typewriter from "typewriter-effect";
import React from "react";
// check commit
const TypeEffect = () => {
  return (
    <div className="text-cyan-50 absolute bottom-40 self-center text-[12px] sm:text-left md:text-3xl">
      <Typewriter
        options={{
          strings: [
            "AI: Your Chatting Buddy with 0% Judgment!",
            "Where Your Voice Makes AI Go 'Whoa!",
            "Turns Out, AI Has a Sense of Humor Too!",
            "AI: Not a Mind Reader, But Close Enough!",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypeEffect;
