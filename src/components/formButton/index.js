import React from "react";

const FormButton = ({ title, className }) => {
  return (
    <button
      className={`border-2 px-4 rounded-full py-2 text-c_737373 border-c_E6E6E6 bg-c_F2F2F2 md:text-sm text-xs font-semibold ${className}`}
    >
      {title}
    </button>
  );
};

export default FormButton;
