import { WrapperContainer } from "@/components";
import { strings } from "@/locales";
import { useRouter } from "next/navigation";

const ContactServicesSection = () => {
  const router = useRouter();
  return (
    <WrapperContainer
      className={"grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10"}
    >
      {[
        {
          link: "#contact-form",
          title: strings.fillOutTheForm,
          description: strings.takeTimeToFillOut,
        },
        {
          link: "#contact-form",
          title: strings.writeAnEmail,
          description: strings.comfortableWritingAnEmail,
        },
        {
          link: "#contact-us-form",
          title: strings.callConversation,
          description: strings.scheduleAMinuteFreeCall,
        },
      ].map((value, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              router.push(`/contact-us${value.link}`);
            }}
            className="cursor-pointer shadow-customShadow2 rounded-[15px] border-[0.5px] border-l-c_089DE5 border-t-c_089DE5 border-r-c_087DBD border-b-c_087DBD p-3 lg:p-5"
          >
            <h3 className="font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[32px] 2xl:leading-[36px] text-transparent bg-gradient-to-br from-c_089DE5 to-c_087DBD bg-clip-text">
              {value.title}
            </h3>
            <p className="mt-2 font-normal text-sm xl:text-base 2xl:text-lg 2xl:leading-[24px] text-c_101010">
              {value.description}
            </p>
          </div>
        );
      })}
    </WrapperContainer>
  );
};

export default ContactServicesSection;
