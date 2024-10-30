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
import Recaptcha from "../recaptcha";

const ContactUsSection = () => {
  const [toast, setToast] = useState({
    open: false,
    message: "",
    type: "",
  });
  const [openModal, setOpenModal] = useState({ open: false, message: "" });
  const [isHover, setIsHover] = useState(false);
  const [postContactUs, { isLoading: contactUsLoading }] =
    usePostContactUsMutation();

  const formik = useFormik({
    initialValues: {
      yourName: "",
      emailAddress: "",
      phoneNumber: "",
      tellUsAboutYourProject: "",
      selectedInterests: [],
      // budget: "",
    },
    validationSchema: Yup.object({
      yourName: Yup.string().required("Your Name is requied"),
      emailAddress: Yup.string()
        .required("Email address required")
        .email("Email is invalid"),
      phoneNumber: Yup.string()
        .required("Phone number is required")
        .min(7, "minimum 7 number is required")
        .max(15, "maximum 15 number is required"),
      tellUsAboutYourProject: Yup.string()
        .required("Tell Us About Your Project is required")
        .min(15, "min 15 cherecter is required"),
      selectedInterests: Yup.array().min(
        1,
        "Please select atleast one requirement."
      ),
      // budget: Yup.string().required("Budget is required"),
      captcha: Yup.bool()
        .required("Captcha is required")
        .test("isTrue", "Captcha is required", (value) => value === true),
    }),
    onSubmit: async (values) => {
      try {
        const data = {
          name: values.yourName,
          email: values.emailAddress,
          phone: values.phoneNumber,
          description: values.tellUsAboutYourProject,
          requirements: values.selectedInterests?.join(","),
          budget: values.budget,
        };
        const response = await postContactUs(data).unwrap();
        if (response?.message) {
          setOpenModal({ open: true, message: response?.message });
          setTimeout(() => {
            setOpenModal((state) => ({ ...state, open: false }));
          }, 3000);
        }
        formik.resetForm();
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
    <WrapperContainer className={"pt-16 mb-16"}>
      <Modal
        open={
          openModal.open &&
          openModal.message !== "" &&
          openModal?.message?.length > 0
        }
        setOpen={() => {
          setOpenModal({ open: false, message: "" });
        }}
        title={<FaRegCircleCheck color="#198754" size={70} />}
        description={openModal.message}
      />
      <Toast message={toast.message} open={toast.open} type={toast.type} />
      <div className="w-full md:w-4/5 grid grid-flow-row">
        <form onSubmit={formik.handleSubmit}>
          <p className="text-c_101111 font-extrabold text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            {strings.dontHaveTime}
          </p>
          <TypeButtons
            containerClassName={"my-4 grid grid-cols-2 md:grid-cols-3 gap-3"}
            buttonClassName={
              "!px-0 !w-full text-center lg:!text-sm 2xl:!text-[15px]"
            }
            unselectedClassName={`border-c_E6E6E6 bg-c_F9F9F9 text-c_737373 ${
              formik.touched.selectedInterests &&
              formik.errors.selectedInterests
                ? "!border-[#FF0000]"
                : ""
            }`}
            items={strings.helpTypes}
            activeCondition={(value, index) =>
              formik?.values?.selectedInterests?.includes(value)
            }
            onClick={(value, index) => {
              if (formik?.values?.selectedInterests?.includes(value)) {
                const newInterests = formik?.values?.selectedInterests?.filter(
                  (item) => item !== value
                );
                formik.setFieldValue("selectedInterests", newInterests);
              } else {
                const newInterests = [
                  ...formik?.values?.selectedInterests,
                  value,
                ];
                formik.setFieldValue("selectedInterests", newInterests);
              }
            }}
            error={
              formik.touched.selectedInterests &&
              formik.errors.selectedInterests
            }
          />
          <div className="mt-10 md:mr-10">
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
            <div className="md:grid grid-cols-2 gap-4">
              <FloatingLabelInput
                onChange={formik.handleChange}
                value={formik.values.emailAddress}
                error={
                  formik.touched.emailAddress && formik.errors.emailAddress
                }
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
              <PhoneInputField
                defaultCountry={"PK"}
                name="PhoneNumber"
                onChange={(value) => {
                  formik.setFieldValue("phoneNumber", value);
                }}
                borderColorClassName={`${
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                    ? "!border-[#FF0000]"
                    : "!border-c_A7A7A7"
                }`}
                onBlur={formik.handleBlur}
                error={formik.touched.phoneNumber && formik.errors.phoneNumber}
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
          {/* <p className="mt-10 text-c_101111 font-extrabold text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            {strings.tellUsYourProject}
          </p>
          <TypeButtons
            items={strings.projectBudgets}
            containerClassName={
              "flex-wrap justify-evenly md:justify-start gap-3 md:gap-5 mt-5"
            }
            buttonClassName={"text-center lg:!text-sm"}
            unselectedClassName={`border-c_E6E6E6 bg-c_F9F9F9 text-c_737373 ${
              formik.touched.budget && formik.errors.budget
                ? "!border-[#FF0000]"
                : ""
            }`}
            activeCondition={(value, index) => formik?.values?.budget == value}
            onClick={(value, index) => {
              formik.setFieldValue("budget", value);
            }}
            error={formik.touched.budget && formik.errors.budget}
          /> */}
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
            } text-c_FFFFFF border mt-5 xl:mt-10 h-fit px-4 py-3 md:px-7 lg:py-3 flex-shrink-0 rounded-[60px] text-sm lg:text-base font-semibold leading-[104%]`}
          />
        </form>
      </div>
    </WrapperContainer>
  );
};

export default ContactUsSection;
