"use client";
import Warning from "@/app/components/warning/Warning";
import useAuth from "@/app/hooks/useAuth";
import useWarning from "@/app/hooks/useWarning";
import React, { useEffect, useRef, useState } from "react";

const Authentication = () => {
  const formData = useRef({
    email: " ",
    password: "",
  });

  const { authentication } = useAuth();
  const { warningIsOpen, warninProps } = useWarning();

  const handleSubmit = () => {
    authentication(formData.current.email, formData.current.password);
  };

  return (
    <div className="h-full flex flex-col justify-center items-center">
      {warningIsOpen && (
        <Warning title={warninProps.title} text={warninProps.text} />
      )}

      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 sm:w-4/5 md:w-96 ">
        <h2 className="text-2xl font-bold mb-6">Sign In or Sign Up</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            readOnly
            onFocus={(e) => (e.currentTarget.readOnly = false)}
            maxLength={50}
            onChange={(e) => (formData.current.email = e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            maxLength={20}
            onChange={(e) => (formData.current.password = e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Authentication;
