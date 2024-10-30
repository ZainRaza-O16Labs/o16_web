import React from "react";
import WrapperContainer from "../wrapperContainer";
import { strings } from "@/locales";
import HeadingSection from "../headingSection";
import Paragraph from "../paragraph";

const BlogIdea = () => {
  return (
    <WrapperContainer>
      <div className="md:grid md:grid-cols-12 gap-6 md:py-20 py-10 justify-start items-center">
        <HeadingSection
          subtitle={strings.ourBlogs}
          title={strings.ideasBlog}
          containderClassName={"col-span-6"}
        />
        <Paragraph
          description={strings.aboutPara}
          descriptionClassName={"col-span-6"}
        />
      </div>
    </WrapperContainer>
  );
};

export default BlogIdea;
