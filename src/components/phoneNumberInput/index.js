import dynamic from "next/dynamic";
import React from "react";
const PhoneInput = dynamic(() => import("react-phone-number-input"));
import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";

const PhoneInputField = ({
  onChange,
  value,
  placeholder,
  error = false,
  errorBorderColor,
  borderColor,
  errorMessage,
  onBlur,
  defaultCountry,
  borderColorClassName,
  ...props
}) => {
  return (
    <div className="mt-6">
      <PhoneInput
        international
        defaultCountry={defaultCountry}
        className={`${
          error
            ? errorBorderColor || "!border-[#FF0000]"
            : borderColor || `border-c_000000 ${borderColorClassName}`
        } border-b py-2.5 px-0`}
        placeholder={placeholder}
        value={value}
        {...props}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error ? (
        <span className="block text-base text-[#FF0000] mt-2">
          {errorMessage}
        </span>
      ) : null}
    </div>
  );
};

export default PhoneInputField;
