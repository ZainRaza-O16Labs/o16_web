import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Toast({ type, open, message, position }) {
  console.log(type, open, message, "mesjhdseygdsg");
  const notify = () => {
    toast[type](message, {
      position: position || "top-right",
      theme: "colored",
    });
  };
  useEffect(() => {
    if (message != "" && type != "") notify();
  }, [open, message, type]);
  return <ToastContainer />;
}

export default Toast;
