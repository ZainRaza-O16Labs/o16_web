import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";
import ContactUSForm from "../ContactUSForm";
const ContactFormDialog = ({
  open,
  setOpen,
  title,
  children,
  className = "",
  Content,
}) => {
  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (title !== "") {
      setIsOpen(open);
    }
  }, [open, title]);

  return (
    <Dialog
      open={open}
      onClose={() => {
        setIsOpen(false);
        setOpen && setOpen(false);
      }}
      className={`relative z-[99999999999]`}
    >
      {/* Background overlay with blur effect */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm"
        aria-hidden="true"
      />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel
          className={`mx-auto rounded-3xl bg-c_FFFFFF px-8 py-6 shadow-2xl ${className}`}
        >
          <div className="flex justify-end">
            <RxCross2
              size={30}
              className="text-end  cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                setOpen && setOpen(false);
              }}
            />
          </div>
          {title && (
            <Dialog.Title className="flex justify-center items-center">
              {title}
            </Dialog.Title>
          )}
          {/* {children} */}
          <ContactUSForm setOpen={() => setOpen(false)} open={open} />
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ContactFormDialog;
