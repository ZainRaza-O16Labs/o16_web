import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";

const Modal = ({ open, setOpen, title, description }) => {
  let [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (title != "" || description != "") {
      setIsOpen(open);
      // setTimeout(() => {
      //   setIsOpen(false);
      // }, 5000);
    }
  }, [open, title, description]);
  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
        setOpen && setOpen(false);
      }}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-[90%] md:max-w-[30%] rounded-3xl bg-c_FFFFFF p-8 shadow-2xl">
          {title && (
            <Dialog.Title className={"flex justify-center items-center"}>
              {title}
            </Dialog.Title>
          )}
          {description && (
            <p className="mt-5 font-medium text-base font-manrope">
              {description}
            </p>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Modal;
