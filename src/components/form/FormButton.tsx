import React from "react";

type InputProps = {
  children: React.ReactNode;
};

const FormButton: React.FC<InputProps> = (props) => {
  const { children } = props;
  return (
    <div className="block">
      <button
        type="submit"
        className="w-full text-pr-color-500 bg-tr-color-500 px-2 py-1.5 text-center hover:bg-tr-color-800 transition-colors rounded-md"
      >
        {children}
      </button>
    </div>
  );
};

export default FormButton;
