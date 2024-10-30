import { strings } from "@/locales";
import { Modal, PhoneInputField, TextArea, Toast } from "..";
import Button from "../button";
import FloatingLabelInput from "../input";
import TypeButtons from "../typeButtons";
import WrapperContainer from "../wrapperContainer";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { usePostContactUsMutation } from "@/services/contactUs";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Arrow, BlueArrow } from "../../../public/images";
import Image from "next/image";
const ContactUSForm = ({ open, setOpen }) => {
  const [toast, setToast] = useState({
    open: false,
    message: "",
    type: "",
  });

  console.log("setOpen in ContactUSForm:", setOpen); // Debug line
  const [postContactUs, { isLoading: contactUsLoading }] =
    usePostContactUsMutation();
  const [openModal, setOpenModal] = useState(open);
  const [isHover, setIsHover] = useState(false);
  const formik = useFormik({
    initialValues: {
      yourName: "",
      emailAddress: "",
      tellUsAboutYourProject: "",
    },
    validationSchema: Yup.object({
      yourName: Yup.string().required("Your Name is requied"),
      emailAddress: Yup.string()
        .required("Email address required")
        .email("Email is invalid"),
      phoneNumber: Yup.string()
        .required("Phone number is required")
        .min(7, "Minimum 7 number is required")
        .max(15, "Maximum 15 number is required"),
      tellUsAboutYourProject: Yup.string()
        .required("Tell Us About Your Project is required")
        .min(15, "min 15 cherecter is required"),
    }),
    onSubmit: async (values) => {
      try {
        const data = {
          name: values.yourName,
          email: values.emailAddress,
          phone: values.phoneNumber,
          description: values.tellUsAboutYourProject,
        };

        const response = await postContactUs(data).unwrap();
        if (response?.message) {
          // setOpenModal({ open: true, message: response?.message });
          // setTimeout(() => {
          //   setOpenModal((state) => ({ ...state, open: false }));
          // }, 3000);
        }

        setToast({
          message: "Submitted !",
          open: !toast.open,
          type: "success",
        });
        setTimeout(() => {
          formik.resetForm();
          setOpen();
        }, 4000);
      } catch (error) {
        setToast({
          message: error.toString(),
          open: !toast.open,
          type: "error",
        });
      }
    },
  });

  return (
    <div className="w-full  flex justify-center  items-center ">
      <form onSubmit={formik.handleSubmit} className="w-full">
        <div className=" flex flex-col   w-full">
          <Toast message={toast.message} open={toast.open} type={toast.type} />
          <FloatingLabelInput
            onChange={formik.handleChange}
            value={formik.values.yourName}
            error={formik.touched.yourName && formik.errors.yourName}
            onBlur={formik.handleBlur}
            name="yourName"
            type="text"
            placeholder={strings.name}
            labelClassName="!text-c_A7A7A7 text-sm md:text-base lg:text-lg !peer-focus:text-c_A7A7A7"
            inputClassName={`${
              formik.touched.yourName && formik.errors.yourName
                ? "!border-[#FF0000]"
                : "!border-c_A7A7A7"
            } !focus:border-c_089DE5 text-sm md:text-base lg:text-lg !font-medium !text-c_A7A7A7 !pb-2 !pt-3`}
          />
          <div className=" flex-1">
            <FloatingLabelInput
              onChange={formik.handleChange}
              value={formik.values.emailAddress}
              error={formik.touched.emailAddress && formik.errors.emailAddress}
              onBlur={formik.handleBlur}
              type="email"
              name="emailAddress"
              placeholder={strings.email}
              labelClassName="!text-c_A7A7A7 text-sm md:text-base lg:text-lg !peer-focus:text-c_A7A7A7"
              inputClassName={`${
                formik.touched.emailAddress && formik.errors.emailAddress
                  ? "!border-[#FF0000]"
                  : "!border-c_A7A7A7"
              } !focus:border-c_089DE5 text-sm md:text-base lg:text-lg !font-medium !text-c_A7A7A7 !pb-2 !pt-3`}
            />
          </div>

          <div>
            <PhoneInputField
              defaultCountry={"PK"}
              name="PhoneNumber"
              onChange={(value) => {
                formik.setFieldValue("phoneNumber", value);
              }}
              onBlur={formik.handleBlur}
              error={formik.touched.phoneNumber && formik.errors.phoneNumber}
              borderColorClassName={`${
                formik.touched.phoneNumber && formik.errors.phoneNumber
                  ? "!border-[#FF0000]"
                  : "!border-c_A7A7A7"
              } `}
              placeholder={"+XX XXX XXX XXXX"}
              type="tel"
              value={formik.values.phoneNumber}
            />
          </div>
          <TextArea
            onChange={formik.handleChange}
            value={formik.values.tellUsAboutYourProject}
            error={
              formik.touched.tellUsAboutYourProject &&
              formik.errors.tellUsAboutYourProject
            }
            onBlur={formik.handleBlur}
            name="tellUsAboutYourProject"
            placeholder={strings.describeYourProject}
            labelClassName="!text-c_A7A7A7 text-sm md:text-base lg:text-lg !peer-focus:text-c_A7A7A7"
            inputClassName={`h-fit resize-y ${
              formik.touched.tellUsAboutYourProject &&
              formik.errors.tellUsAboutYourProject
                ? "!border-[#FF0000]"
                : "!border-c_A7A7A7"
            } !focus:border-c_089DE5 min-h-[90px] resize-none text-sm md:text-base lg:text-lg !font-medium !text-c_A7A7A7 !pb-2 !pt-3`}
          />
        </div>

        <Button
          type="submit"
          image={false}
          disabled={contactUsLoading}
          title={
            <span className="relative z-10 flex justify-center items-center gap-2">
              {strings.send}
              <Image
                src={isHover ? BlueArrow : Arrow}
                alt="Arrow"
                title="Arrow"
                width={20}
                height={20}
                className="w-[10px] h-[10px] md:w-3 md:h-3"
              />
            </span>
          }
          onMouseOver={() => {
            setIsHover(true);
          }}
          onMouseOut={() => {
            setIsHover(false);
          }}
          className={`${
            contactUsLoading
              ? "bg-c_636363"
              : "bg-c_089DE5 text-c_FFFFFF hover:before:bg-c_FFFFFF relative overflow-hidden border border-primary bg-gradient-to-tl from-c_089DE5 to-c_087DBD transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-primary before:transition-all before:duration-500 hover:text-primary hover:before:left-0 hover:before:w-full"
          } text-c_FFFFFF border mt-5 xl:mt6 h-fit px-4 py-3 md:px-7 lg:py-3 flex-shrink-0 rounded-[60px] text-sm lg:text-base font-semibold leading-[104%]`}
        />
      </form>
    </div>
  );
};

export default ContactUSForm;
