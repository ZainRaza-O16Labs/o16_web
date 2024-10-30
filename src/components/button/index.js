import Image from "next/image";
import { Arrow } from "../../../public/images";
/**
 * Render a button component with a given title, onClick event handler, className, and additional props.
 *
 * @param {string} title - The text displayed on the button.
 * @param {function} onClick - The event handler function called when the button is clicked.
 * @param {string} className - The CSS class name applied to the button.
 * @param {object} props - Additional props to be spread onto the button element.
 * @return {JSX.Element} The rendered button component.
 */
const Button = ({
  title,
  onClick,
  className,
  image,
  iconClassName,
  ...props
}) => {
  return (
    <button aria-label={title} className={className} onClick={onClick} {...props}>
      {title}
      <div className={` ${image ? "" : "hidden"} `}>
        <Image
          className={`ml-4 ${iconClassName}`}
          alt="arrow"
          title="arrow"
          src={Arrow}
          width={10}
          height={10}
        />
      </div>
    </button>
  );
};

export default Button;
