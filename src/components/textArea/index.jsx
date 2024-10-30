/**
 * Renders a floating label text area component.
 *
 * @param {Object} props - The text area component's props.
 * @param {string} props.value - The value of the text area.
 * @param {function} props.onChange - The function to call when the text area value changes.
 * @param {string} props.labelText - The text to display as the text area's label.
 * @param {string} props.containerClassName - The class name for the container.
 * @param {string} props.inputClassName - The class name for the text area input.
 * @param {string} props.type - The type of the input.
 * @param {boolean} props.error - Indicates if there is an error with the input.
 * @param {string} props.labelClassName - The class name for the label.
 * @param {string} props.placeholder - The placeholder for the text area input.
 * @param {string} props.errorMessage - The error message to display.
 * @param {Object} props... - Any other additional props for the text area component.
 * @return {JSX.Element} - The rendered floating label text area component.
 */
const FloatingLabelTextArea = ({
  value,
  onChange,
  labelText,
  containerClassName,
  inputClassName,
  type,
  error = false,
  labelClassName,
  placeholder,
  errorMessage = "",
  rows,
  ...props
}) => {
  return (
    <div className={`relative z-0 mt-5 ${containerClassName}`}>
      <textarea
        autoComplete="off"
        value={value}
        // id="floating_standard"
        className={`${
          error ? "border-[#FF0000]" : "border-c_FFFFFF"
        } block py-2.5 px-0 w-full text-base text-c_FFFFFF bg-transparent border-b appearance-none focus:outline-none focus:ring-0 focus:border-c_FFFFFF peer ${inputClassName}`}
        placeholder={placeholder}
        {...props}
        onChange={onChange}
        rows={rows}
      />
      {labelText && (
        <label
          htmlFor="floating_standard"
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

export default FloatingLabelTextArea;
