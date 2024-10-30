const TypeButtons = ({
  items,
  containerClassName,
  buttonClassName,
  selectedClassName,
  unselectedClassName,
  activeCondition,
  onClick,
  error,
  errorMessage,
  errorClassName,
  mainContainerClassName,
}) => {
  return (
    <div className={`w-full ${mainContainerClassName}`}>
      <div
        className={`flex gap-3 overflow-x-scroll no-scrollbar ${containerClassName}`}
      >
        {items.map((value, index) => {
          return (
            <div
              key={index}
              onClick={() => onClick && onClick(value, index)}
              className={`w-max h-min text-nowrap rounded-full text-xs md:text-sm lg:text-base xl:text-lg font-semibold px-8 py-2 cursor-pointer ${
                activeCondition && activeCondition(value, index)
                  ? `bg-gradient-to-br from-c_089DE5 to-c_087DBD text-c_FFFFFF ${selectedClassName}`
                  : `text-c_ABABAB border-c_DEDEDE border ${unselectedClassName}`
              } ${buttonClassName}`}
            >
              {typeof value == "string" ? value : value.name}
            </div>
          );
        })}
      </div>
      {error ? (
        <span
          className={`block text-base text-[#FF0000] mt-2 ${errorClassName}`}
        >
          {errorMessage}
        </span>
      ) : null}
    </div>
  );
};

export default TypeButtons;
