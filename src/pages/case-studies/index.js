import {
  CaseStudiesHeroSection,
  HeroSection,
  Layout,
  ProjectSlider,
  TypeButtons,
  WrapperContainer,
} from "@/components";
import { services } from "@/constants/services.constants";
import { strings } from "@/locales";
import { getCaseStudies } from "@/services/caseStudies";
import { wrapper } from "@/store";
import { useEffect, useState } from "react";

const CaseStudies = ({ caseStudies }) => {
  const metadata = {
    title: strings.caseStudiesMetaTitle,
    description: strings.caseStudiesMetaDescription,
  };
  const [selectedId, setSelectedId] = useState(-1);
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (selectedId == -1) {
      setItems([...caseStudies]);
    } else {
      setItems([
        ...caseStudies.filter((value) =>
          value.categories?.includes(selectedId)
        ),
      ]);
    }
  }, [selectedId]);
  return (
    <Layout metadata={metadata}>
      <HeroSection
        subtitle={strings.caseStudies}
        title={strings.ourAmazingWork}
        description={strings.someOfTheWorldsBiggestBrands}
      />
      <WrapperContainer>
        {/* <TypeButtons
          items={[
            { id: -1, name: strings.all, slug: strings.all },
            ...services,
          ]}
          selectedIndex={selectedId}
          onClick={(value) => setSelectedId(value.id)}
          activeCondition={(value) => value?.id == selectedId}
          buttonClassName={"!text-sm !py-[5px] !px-6"}
        /> */}
        {items?.map((value, index) => {
          return (
            <ProjectSlider key={"ProjectSlider-" + index} items={[value]} />
          );
        })}
      </WrapperContainer>
    </Layout>
  );
};

export default CaseStudies;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const getCaseStudiesResponse = await store.dispatch(
      getCaseStudies.initiate()
    );
    return {
      props: {
        caseStudies: getCaseStudiesResponse?.data,
      },
    };
  }
);
