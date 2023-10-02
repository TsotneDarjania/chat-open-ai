import useWarning from "@/app/hooks/useWarning";
import React from "react";

const Warning = ({ title, text }: { title: string; text: string }) => {
  const { pageContext } = useWarning();
  return (
    <div className="w-screen h-screen fixed z-1 top-0 left-0 flex flex-col justify-center items-center gap-3">
      <div
        onClick={() => pageContext.setWarningIsOpen(false)}
        className=" left-0 top-0 w-full h-screen fixed z-10 bg-stone-900 opacity-90"
      ></div>

      <h1 className=" text-3xl text-yellow-50 z-20"> {title} </h1>
      <p className=" text-xl text-yellow-50 z-20"> {text} </p>
    </div>
  );
};

export default Warning;
