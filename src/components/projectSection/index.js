import { strings } from "@/locales";
import React from "react";
import WrapperContainer from "../wrapperContainer";
import { ProjectSlider } from "../index";
import HeadingSection from "../headingSection";
import Paragraph from "../paragraph";

const ProjectsSection = ({ items }) => {
  return (
    <WrapperContainer className={"mb-16"}>
      <div className={"grid items-center grid-cols-1 md:grid-cols-12 gap-5"}>
        <div className="col-span-1 md:col-span-4 lg:col-span-6">
          <HeadingSection
            title={strings.moreThanFivetyAwesomeProjects}
            titleClassName={`text-c_2B2B2B`}
          />
        </div>
        <div className="col-span-1 md:col-span-7 lg:col-span-6 mt-5 md:mt-0 text-c_2B2B2B">
          <Paragraph
            description={
              <>
                {strings.weCoverAll}{" "}
                <span className="text-primary font-semibold">
                  {strings.mobileAppWebsiteAndDigitalTransformation}{" "}
                </span>
                {strings.needsGearedToDrive}{" "}
                <span className="text-primary font-semibold">
                  {strings.enterpriseMobileAppDevelopment}{" "}
                </span>
                {strings.weSupportTheEntire}
              </>
            }
          />
        </div>
      </div>
      <ProjectSlider items={items} />
    </WrapperContainer>
  );
};

export default ProjectsSection;
