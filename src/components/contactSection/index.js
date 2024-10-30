import { strings } from "@/locales";
import { usePostContactUsMutation } from "@/services/contactUs";
import { useFormik } from "formik";
import Image from "next/image";
import { useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import * as Yup from "yup";
import { Button, Input, Modal, PhoneInputField, Toast, TypeButtons } from "..";
import { Arrow, BlueArrow, Laptop } from "../../../public/images";
import FloatingLabelTextArea from "../textArea";
import WrapperContainer from "../wrapperContainer";
// import Recaptcha from "../recaptcha";

const ContactSection = ({ isMobile = false }) => {
  const [toast, setToast] = useState({
    open: false,
    message: "",
    type: "",
  });
  const [openModal, setOpenModal] = useState({ open: false, message: "" });
  const [isHover, setIsHover] = useState(false);
  const [buttonDisable, setButtonDisable] = useState();
  const [postContactUs, { isLoading: contactUsLoading }] =
    usePostContactUsMutation();
  const formik = useFormik({
    initialValues: {
      name: "",
      emailAddress: "",
      phoneNumber: "",
      describeYourProject: "",
      selectedInterests: [],
      // budget: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is requied")
        .matches(/^[A-Za-z ]+$/, "Name should only contain letters and spaces"),
      emailAddress: Yup.string()
        .required("Email address required")
        .email("Email is invalid"),
      phoneNumber: Yup.string()
        .required("Phone number is required")
        .min(7, "Minimum 7 number is required")
        .max(15, "Maximum 15 number is required"),
      describeYourProject: Yup.string()
        .required("Describe Your Project is required")
        .min(15, "Minimum 15 character is required"),
      selectedInterests: Yup.array().min(
        1,
        "Please select atleast one requirement."
      ),
      // budget: Yup.string().required("Budget is required"),
    }),
    onSubmit: async (values) => {
      try {
        setButtonDisable(true);
        const data = {
          name: values.name,
          email: values.emailAddress,
          phone: values.phoneNumber,
          description: values.describeYourProject,
          requirements: values.selectedInterests?.join(","),
          // budget: values.budget,
        };
        const response = await postContactUs(data).unwrap();
        if (response?.message) {
          setOpenModal({ open: true, message: response?.message });
          setTimeout(() => {
            setOpenModal((state) => ({ ...state, open: false, message: "" }));
          }, 3000);
        }
        formik.resetForm();
        setButtonDisable(false);
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
    <WrapperContainer className={"mb-16"}>
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
      <div className="xl:grid grid-cols-12 gap-10">
        <div className="col-span-8">
          <form onSubmit={formik.handleSubmit}>
            <div className="md:grid grid-cols-12 gap-8">
              <div className="col-span-12">
                <h3 className="text-c_151515 m-0 text-xl font-extrabold">
                  {strings.hereToMakeYouAwesomeWith}
                </h3>
                <TypeButtons
                  containerClassName={
                    "my-4 grid grid-cols-2 md:grid-cols-3 gap-3"
                  }
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
                      const newInterests =
                        formik?.values?.selectedInterests?.filter(
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
              </div>
              {/* <div className="col-span-4">
                <h4 className="text-c_151515 m-0 text-xl font-extrabold">
                  {strings.tellUsYourProject}
                </h3>
                <TypeButtons
                  containerClassName={"my-4 grid grid-cols-2 gap-4"}
                  buttonClassName={`!px-0 !w-full text-center lg:!text-sm 2xl:!text-[15px]`}
                  unselectedClassName={`border-c_E6E6E6 bg-c_F9F9F9 text-c_737373 ${
                    formik.touched.budget && formik.errors.budget
                      ? "!border-[#FF0000]"
                      : ""
                  }`}
                  items={strings.projectBudgets}
                  activeCondition={(value, index) =>
                    formik?.values?.budget == value
                  }
                  onClick={(value, index) => {
                    formik.setFieldValue("budget", value);
                  }}
                  error={formik.touched.budget && formik.errors.budget}
                />
              </div> */}
            </div>
            <div className="mt-8">
              <Input
                onBlur={formik.handleBlur}
                error={formik.touched.name && formik.errors.name}
                value={formik.values.name}
                name="name"
                placeholder={strings.name}
                onChange={formik.handleChange}
                type="text"
                inputClassName={`xl:text-lg  2xl:text-xl ${
                  formik.touched.name && formik.errors.name
                    ? "!border-[#FF0000]"
                    : "!border-c_000000"
                } !text-c_737373`}
                labelClassName="xl:text-lg 2xl:text-xl !text-c_737373 "
              />
              <div className="md:grid grid-cols-2 gap-4">
                <Input
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.emailAddress && formik.errors.emailAddress
                  }
                  value={formik.values.emailAddress}
                  name="emailAddress"
                  onChange={formik.handleChange}
                  placeholder={strings.email}
                  type="email"
                  inputClassName={`xl:text-lg 2xl:text-xl ${
                    formik.touched.emailAddress && formik.errors.emailAddress
                      ? "!border-[#FF0000]"
                      : "!border-c_000000"
                  } !text-c_737373`}
                  labelClassName="xl:text-lg 2xl:text-xl !text-c_737373"
                />
                <PhoneInputField
                  defaultCountry={"PK"}
                  name="PhoneNumber"
                  onChange={(value) => {
                    formik.setFieldValue("phoneNumber", value);
                  }}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.phoneNumber && formik.errors.phoneNumber
                  }
                  borderColorClassName={`${
                    formik.touched.phoneNumber && formik.errors.phoneNumber
                      ? "!border-[#FF0000]"
                      : "!border-c_000000"
                  }`}
                  placeholder={"+XX XXX XXX XXXX"}
                  type="tel"
                  value={formik.values.phoneNumber}
                />
              </div>
              <FloatingLabelTextArea
                onBlur={formik.handleBlur}
                error={
                  formik.touched.describeYourProject &&
                  formik.errors.describeYourProject
                }
                value={formik.values.describeYourProject}
                name="describeYourProject"
                onChange={formik.handleChange}
                placeholder={strings.describeYourProject}
                inputClassName={`xl:text-lg 2xl:text-xl ${
                  formik.touched.describeYourProject &&
                  formik.errors.describeYourProject
                    ? "!border-[#FF0000]"
                    : "!border-c_000000"
                } !text-c_737373 min-h-[90px] resize-none`}
                labelClassName="xl:text-lg 2xl:text-xl !text-c_737373"
              />
              {/* <div className="mt-10">
                <Recaptcha
                  onChange={(value) => {
                    formik.setFieldValue("captcha", true);
                  }}
                  onErrored={(value) => {
                    formik.setFieldValue("captcha", false);
                  }}
                  onExpired={(value) => {
                    formik.setFieldValue("captcha", false);
                  }}
                />
                {formik.errors.captcha && (
                  <p className="text-[#FF0000] font-manrope text-sm md:text-base">
                    {strings.pleaseVerifyCaptcha}
                  </p>
                )}
              </div> */}
              <Button
                type="submit"
                image={false}
                disabled={contactUsLoading || buttonDisable}
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
            </div>
          </form>
        </div>
        {!isMobile && (
          <div className="col-span-4 xl:-mt-1 mt-10 hidden md:grid grid-cols-12">
            <div className="md:col-span-6 xl:col-span-12 ">
              <h3 className="text-c_151515 md:text-[40px] m-0 text-3xl xl:!leading-[50px] !leading-[40px] font-extrabold">
                {strings.whoAreYouCreating}
              </h3>
              <p className="text-sm mt-6 text-c_2B2B2B border-l-[5px] border-c_087DBD pl-[6px] md:pl-[10px] py-1 2xl:pl-[22px] md:py-[11px]">
                {strings.yourDevelopmentProjectAndIndustry}
              </p>
            </div>
            <div className="md:col-span-6 xl:col-span-12 w-full md:mt-0 mt-4 flex justify-center items-center">
              <Image
                className="w-auto"
                src={Laptop}
                alt="laptop"
                title="laptop"
                width={556}
                height={371}
              />
            </div>
          </div>
        )}
      </div>
    </WrapperContainer>
  );
};

export default ContactSection;
