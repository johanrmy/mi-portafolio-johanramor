import React from "react";
import { FieldError } from "react-hook-form";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <div className="flex flex-col">
          <label htmlFor={props.id} className="text-tr-color-500 text-xl my-2">
            {label}
          </label>
          <input
            ref={ref}
            type={type}
            {...props}
            className={`rounded-md text-gray-600 text-lg border-sc-color-500 px-4 py-2 font-normal pr-color-100 focus:ring focus:outline-none transition-colors ${
              error ? "focus:ring-red-500" : "focus:ring-sc-color-500"
            }`}
          />
          {error && (
            <p className="text-red-500 text-sm mt-1">{error.message}</p>
          )}
        </div>
      </div>
    );
  }
);

export default Input;
