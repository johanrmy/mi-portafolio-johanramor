"use client";
import React, { useEffect } from "react";
import { iconRef } from "./icon/iconRef";

interface AlertProps {
  message: string;
  type: "success" | "error";
  isLoading?: boolean;
  duration?: number;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({
  message,
  type,
  isLoading = false,
  duration = 3000,
  onClose,
}) => {
  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose, isLoading]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-screen h-screen z-50 bg-black opacity-30 transition-all`}
      />
      <div
        className={`fixed top-0 left-0 w-screen h-screen z-50 backdrop-filter backdrop-blur-sm transition-all`}
      />
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 px-14 py-10 rounded shadow-lg text-white max-w-96 transition-all bg-pr-color-100`}
      >
        <div className="flex flex-col justify-center items-center w-full space-y-4">
          {isLoading ? (
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-tr-color-500 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div> // Add your loader here
          ) : (
            <>
              <div
                className={`${
                  type === "success" ? "text-green-500" : "text-red-500"
                }`}
              >
                {iconRef[type]}
              </div>
              <div className="text-tr-color-500 font-bold">{message}</div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Alert;
