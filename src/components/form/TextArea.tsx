"use client";
import React, { useState, ChangeEvent, forwardRef } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface InputProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  maxLength?: number;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

const TextArea = forwardRef<HTMLTextAreaElement, InputProps>(
  ({ maxLength = 250, label, register, error, ...props }, ref) => {
    const [text, setText] = useState("");

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      if (event.target.value.length <= maxLength) {
        setText(event.target.value);
        register.onChange(event);
      }
    };

    return (
      <div className="w-full">
        <div className="flex flex-col">
          <label htmlFor={props.id} className="text-tr-color-500 text-xl my-2">
            {label}
          </label>
          <textarea
            ref={(e) => {
              ref && (typeof ref === "function" ? ref(e) : (ref.current = e));
              register.ref(e);
            }}
            onChange={handleChange}
            onBlur={register.onBlur}
            name={register.name}
            {...props}
            className={`rounded-md text-gray-600 text-lg px-4 py-2 font-normal focus:ring focus:outline-none transition-colors resize-none min-h-[200px] ${
              error ? "focus:ring-red-500" : "focus:ring-sc-color-500"
            }`}
          />
          <div className="text-right text-gray-500 text-sm mt-1">
            {text.length}/{maxLength}
          </div>
          {error && (
            <p className="text-red-500 text-sm mt-1">{error.message}</p>
          )}
        </div>
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
export default TextArea;
