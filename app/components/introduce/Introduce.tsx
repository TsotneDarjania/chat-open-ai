import React from "react";
import AiAnimation from "./aiAnimation/AiAnimation";
import TypeEffect from "./typeEffect/TypeEffect";
import ScrollButton from "./scrollButton/ScrollButton";

const Introduce = () => {
  return (
    <div className="w-screen h-screen flex p-2 justify-center bg-slate-900">
      <AiAnimation />
      <TypeEffect />
      <ScrollButton />
      <p className=" w-1/4 text-lg text-white absolute left-2">
        Welcome to VoiceChat AI, an innovative platform that brings artificial
        intelligence and voice technology together to create a unique and
        engaging user experience. With VoiceChat AI, you have the power to
        communicate and interact with our advanced AI system using nothing but
        your voice. Whether you're looking for information, companionship, or
        entertainment, our platform is here to cater to your needs
      </p>
    </div>
  );
};

export default Introduce;
