import { HeadingSection, Paragraph, WrapperContainer } from "@/components";

const HeroSection = ({
  subtitle,
  subtitleClassName,
  title,
  titleClassName,
  description,
  descriptionClassName,
  containerClassName,
  leftContainerClassName,
}) => {
  return (
    <WrapperContainer
      className={`mb-16 grid md:grid-cols-12 md:pt-20 pt-10 justify-start items-center gap-5 ${containerClassName}`}
    >
      <div className={`col-span-6 ${leftContainerClassName}`}>
        <h3 className={`2xl:text-lg m-0 md:text-sm text-xs font-medium bg-gradient-to-tl from-c_089DE5 to-c_087DBD bg-clip-text text-transparent uppercase ${subtitleClassName}`}>{subtitle}</h3>
        <h1 className={`font-extrabold m-0 text-2xl md:text-4xl lg:text-4xl xl:text-5xl xl:leading-[60px] 2xl:text-[50px] 2xl:leading-[70px] text-c_2B2B2B ${titleClassName}`}>{title}</h1>
      </div>     
      <Paragraph
        description={description}
        descriptionClassName={`col-span-6 ${descriptionClassName}`}
      />
    </WrapperContainer>
  );
};

export default HeroSection;
