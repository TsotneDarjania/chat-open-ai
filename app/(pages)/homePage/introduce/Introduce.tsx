import AiAnimation from "./aiAnimation/AiAnimation";
import TypeEffect from "./typeEffect/TypeEffect";
import ScrollButton from "./scrollButton/ScrollButton";

const Introduce = () => {
  return (
    <div className="h-screen flex p-2 flex-col bg-slate-900">
      <div className="text-white text-base sm:w-3/4 md:text-xl md:w-1/3">
        Welcome to VoiceChat AI, an innovative platform that brings artificial
        intelligence and voice technology together to create a unique and
        engaging user experience. With VoiceChat AI, you have the power to
        communicate and interact with our advanced AI system using nothing but
        your voice. Whether you're looking for information, companionship, or
        entertainment, our platform is here to cater to your needs
      </div>
      <AiAnimation />
      <TypeEffect />
      <ScrollButton />
    </div>
  );
};

export default Introduce;
