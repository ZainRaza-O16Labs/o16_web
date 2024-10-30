import { BlogCard, HeroSection, Layout, WrapperContainer } from "@/components";
import { strings } from "@/locales";
import { getBlogs } from "@/services/blogs";
import { wrapper } from "@/store";
import { useState } from "react";

const page = ({ blogs }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const metadata = {
    title: strings.blogMetaTitle,
    description: strings.blogMetaDescription,
  };
  return (
    <Layout metadata={metadata}>
      <HeroSection
        subtitle={strings.ourBlogs}
        title={strings.learnFromExpertsShareInspireEngage}
        description={strings.weHaveOurEyesEarsAndHeart}
      />
      <WrapperContainer>
        {/* <TypeButtons
          items={strings.caseStudiesTypes}
          activeCondition={(value, index) => index == selectedIndex}
          onClick={(value, index) => {
            setSelectedIndex(index);
          }}
        /> */}
        <BlogCard data={blogs} />
      </WrapperContainer>
    </Layout>
  );
};

export default page;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const getBlogsResponse = await store.dispatch(getBlogs.initiate());
    return {
      props: {
        blogs: getBlogsResponse?.data,
      },
    };
  }
);
