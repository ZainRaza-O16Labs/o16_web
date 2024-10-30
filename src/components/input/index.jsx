import React from "react";

/**
 * Renders a floating label input component.
 *
 * @param {Object} props - The input component's props.
 * @param {string} props.value - The value of the input.
 * @param {function} props.onChange - The function to call when the input value changes.
 * @param {string} props.labelText - The text to display as the input's label.
 * @param {string} props.containerClassName - The class name for the input container.
 * @param {string} props.inputClassName - The class name for the input element.
 * @param {string} props.type - The type of input element (e.g., text, password).
 * @param {string} props.placeholder - The placeholder text for the input.
 * @param {boolean} props.error - Indicates if there's an error with the input.
 * @param {string} props.labelClassName - The class name for the input label.
 * @param {string} props.errorMessage - The error message to display if there's an error.
 * @param {string} props.errorBorderColor - The border color to use when there's an error.
 * @param {string} props.borderColor - The border color to use when there's no error.
 * @param {...props} props - Any other additional props for the input component.
 * @return {JSX.Element} - The rendered floating label input component.
 */
const FloatingLabelInput = ({
  value,
  onChange,
  labelText,
  containerClassName,
  inputClassName,
  type,
  placeholder,
  error = false,
  labelClassName,
  errorMessage = "",
  errorBorderColor,
  borderColor,
  onBlur,
  ...props
}) => {
  // Renders the floating label input component
  return (
    <div className={`relative z-0 mt-5 ${containerClassName}`}>
      <input
        type={type}
        autoComplete="off"
        value={value}
        // id={placeholder}
        className={`${
          error
            ? errorBorderColor || "border-[#FF0000]"
            : borderColor || "border-c_FFFFFF"
        } block py-2.5 px-0 w-full text-base text-c_FFFFFF bg-transparent border-b appearance-none focus:outline-none focus:ring-0 focus:border-c_FFFFFF peer  ${inputClassName}`}
        placeholder={placeholder}
        {...props}
        onBlur={onBlur}
        onChange={onChange}
      />
      {labelText && (
        <label
          htmlFor={placeholder}
          className={`absolute text-lg text-c_FFFFFF duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-c_FFFFFF peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto ${labelClassName}`}
        >
          {labelText}
        </label>
      )}
      {error ? (
        <span className="block text-base text-[#FF0000] mt-2">
          {errorMessage}
        </span>
      ) : null}
    </div>
  );
};

export default FloatingLabelInput;
