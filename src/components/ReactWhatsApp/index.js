import { useEffect, useState, memo } from "react";
// import { Icons } from "../assets/icons";
const WhatsAppRedirect = () => {
  const [isIconVisible, setIconVisible] = useState(false);
  //   const { whatsAppIcon } = Icons;
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition === 0) {
      setIconVisible(false);
    } else {
      setIconVisible(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isIconVisible ? (
    <a
      href={"https://wa.me/+13474671161"}
      className={` flex items-center justify-center bg-c_25D366 z-[2000] cursor-pointer fixed sm:bottom-44 bottom-[110px] right-6 rounded-full p-2`}
      rel={"noreferrer"}
      target={"_blank"}
    >
      <img
        src={"/images/whats-app.svg"}
        alt={"whatsappicon"}
        className={"h-8 w-8"}
      />
    </a>
  ) : null;
};
export default memo(WhatsAppRedirect);
