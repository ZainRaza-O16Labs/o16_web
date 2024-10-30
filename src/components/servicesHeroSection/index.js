import { strings } from "@/locales";
import {
  Button,
  HeroSection,
  Input,
  Modal,
  Paragraph,
  TextArea,
  Toast,
} from "..";
import WrapperContainer from "../wrapperContainer";
import { usePostContactUsMutation } from "@/services/contactUs";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import Image from "next/image";
import { Arrow, BlueArrow } from "../../../public/images";

const ServicesHeroSection = ({ subtitle, title, description }) => {
  const [toast, setToast] = useState({
    open: false,
    message: "",
    type: "",
  });
  const [isHover, setIsHover] = useState(false);
  const [openModal, setOpenModal] = useState({ open: false, message: "" });
  const [postContactUs, { isLoading: contactUsLoading }] =
    usePostContactUsMutation();
  const formik = useFormik({
    initialValues: {
      name: "",
      emailAddress: "",
      description: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is requied"),
      emailAddress: Yup.string()
        .required("Email address required")
        .email("Email is invalid"),
      description: Yup.string()
        .required("Describe Your Project is required")
        .min(15, "min 15 cherecter is required"),
    }),
    onSubmit: async (values) => {
      try {
        const data = {
          name: values.name,
          email: values.emailAddress,
          description: values.description,
        };
        const response = await postContactUs(data).unwrap();
        if (response?.message) {
          setOpenModal({ open: true, message: response?.message });
          setTimeout(() => {
            setOpenModal((state) => ({ ...state, open: false, message: "" }));
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
    <>
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
      <WrapperContainer
        className={
          "grid grid-cols-1 md:grid-cols-12 pt-10 md:pt-16 gap-5 md:gap-5 lg:gap-20 mb-16 items-center"
        }
      >
        <HeroSection
          subtitle={subtitle}
          title={title}
          description={description}
          containerClassName={"md:col-span-7 xl:col-span-7 !m-0 !p-0"}
          leftContainerClassName={"!col-span-12"}
          descriptionClassName={"!col-span-12 !mt-5 md:!mt-0"}
        />
        <div className="md:col-span-5 xl:col-span-5 bg-c_FFFFFF border-[0.5px] rounded-[15px] border-c_089DE5 shadow-customShadow2 p-4 md:p-5 xl:p-10">
          <p className="font-bold text-xl md:text-xl lg:text-2xl xl:text-3xl text-c_000000">
            {strings.speakToAnExpert}
          </p>
          <Paragraph
            description={
              <>
                {strings.ifyouhaveanyRFPrequirementplease}
                <a href="mailto:{strings.o16Email}" className="font-bold bg-gradient-to-tl from-c_089DE5 to-c_087DBD text-transparent bg-clip-text">
                  {strings.o16Email}
                </a>
                {strings.andIfYouAre}
              </>
            }
            descriptionClassName={"mt-2"}
          />
          <form onSubmit={formik.handleSubmit}>
            <Input
              onBlur={formik.handleBlur}
              error={formik.touched.name && formik.errors.name}
              value={formik.values.name}
              name="name"
              onChange={formik.handleChange}
              type="text"
              containerClassName=""
              inputClassName={`${
                formik.touched.name && formik.errors.name
                  ? "!border-[#FF0000]"
                  : "!border-c_F3F3F3"
              } !border rounded-lg overflow-hidden !bg-c_FBFBFB text-sm font-normal !text-c_747272 placeholder:text-c_747272 px-2 md:px-4`}
              placeholder={strings.name}
            />
            <Input
              onBlur={formik.handleBlur}
              error={formik.touched.emailAddress && formik.errors.emailAddress}
              value={formik.values.emailAddress}
              name="emailAddress"
              onChange={formik.handleChange}
              type="email"
              containerClassName=""
              inputClassName={`${
                formik.touched.emailAddress && formik.errors.emailAddress
                  ? "!border-[#FF0000]"
                  : "!border-c_F3F3F3"
              } rounded-lg overflow-hidden !border !bg-c_FBFBFB text-sm !text-c_747272 placeholder:text-c_747272 px-2 md:px-4`}
              placeholder={strings.email}
            />
            <TextArea
              onBlur={formik.handleBlur}
              error={formik.touched.description && formik.errors.description}
              value={formik.values.description}
              name="description"
              onChange={formik.handleChange}
              containerClassName=""
              inputClassName={`${
                formik.touched.description && formik.errors.description
                  ? "!border-[#FF0000]"
                  : "!border-c_F3F3F3"
              } !border rounded-lg overflow-hidden !bg-c_FBFBFB text-sm !text-c_747272 placeholder:text-c_747272 px-2 md:px-4 resize-none`}
              placeholder={strings.describeYourProject}
            />
            <Button
              type="submit"
              image={false}
              disabled={contactUsLoading}
              title={
                <span className="relative z-10 flex justify-center items-center gap-2">
                  {strings.send}
                  {isHover ? (
                    <Image
                      src={BlueArrow}
                      alt="arrow"
                      title="arrow"
                      width={20}
                      height={20}
                      className="w-[10px] h-[10px] md:w-3 md:h-3"
                    />
                  ) : (
                    <Image
                      src={Arrow}
                      alt="arrow"
                      title="arrow"
                      width={20}
                      height={20}
                      className="w-[10px] h-[10px] md:w-3 md:h-3"
                    />
                  )}
                </span>
              }
              onMouseOver={() => {
                setIsHover(true);
              }}
              onMouseOut={() => {
                setIsHover(false);
              }}
              className={`w-[130px] h-[35px] ${
                contactUsLoading
                  ? "bg-c_636363"
                  : "bg-c_089DE5 text-c_FFFFFF hover:before:bg-c_FFFFFF relative overflow-hidden border border-primary bg-gradient-to-tl from-c_089DE5 to-c_087DBD transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-primary before:transition-all before:duration-500 hover:text-primary hover:before:left-0 hover:before:w-full"
              } text-c_FFFFFF border mt-5 xl:mt-10 h-fit px-4 py-3 md:px-7 lg:py-3 flex-shrink-0 rounded-[60px] text-sm lg:text-base font-semibold leading-[104%] float-right`}
            />
          </form>
        </div>
      </WrapperContainer>
    </>
  );
};

export default ServicesHeroSection;
