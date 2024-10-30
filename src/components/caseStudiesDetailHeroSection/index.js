import Image from "next/image";
import WrapperContainer from "../wrapperContainer";
import HeadingSection from "../headingSection";
import Paragraph from "../paragraph";

const CaseStudiesDetailHeroSection = ({
  projectLogo,
  projectInfo,
  projectName,
  technologyLogos,
  bannerLeftImage,
  bannerRightImage,
  projectBackground,
  link,
}) => {
  return (
    <div className="h-fit relative mb-16">
      <Image
        className="h-full w-full bg-cover object-cover"
        src={projectBackground}
        alt="Case Studies Hero Section Backgound"
        title="Case Studies Hero Section Backgound"
        fill
      />
      <WrapperContainer>
        <div className="relative z-0 md:grid grid-cols-12 items-center gap-5">
          <div className="col-span-6">
            <Image
              width={200}
              height={200}
              src={projectLogo}
              className="w-32 h-32 object-contain"
              alt="Dottwar Logo"
              title="Dottwar Logo"
            />
            <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl text-c_FAFAFA mt-1 mb-0">
              {projectName}
            </h1>
            <div className="text-c_FFFFFF mt-1 lg:mt-3 font-normal 2xl:text-base 2xl:leading-[28px] text-sm" dangerouslySetInnerHTML={{__html: projectInfo }}></div>
            <div className="md:mt-0 mt-5">
              <Image
                width={1200}
                height={600}
                className="w-full h-auto"
                src={technologyLogos}
                alt="React Logo"
                title="React Logo"
              />
            </div>
          </div>
          <div className="col-span-6 py-12">           
            <iframe
              src={link}
              width="100%"
              height="550px"
              allowFullScreen
            ></iframe>
          </div>         
        </div>
      </WrapperContainer>
    </div>
  );
};

export default CaseStudiesDetailHeroSection;
