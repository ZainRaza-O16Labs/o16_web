import dynamic from "next/dynamic";

const Layout = dynamic(() => import("./layout"), {});

const AboutSection = dynamic(() => import("./aboutSection/index"), {});
const AboutTheServiceSection = dynamic(
  () => import("./aboutTheServiceSection/index"),
  { loading: () => <p>Loading...</p> }
);
const AboutVideo = dynamic(() => import("./aboutVideo/index"), {
  ssr: false,
});
const BlogCard = dynamic(() => import("./blogCard/index"), {});
const BlogsDescription = dynamic(() => import("./blogDescription/index"), {});
const BlogIdea = dynamic(() => import("./blogIdea/index"), {});
const Brief = dynamic(() => import("./brief/index"), {});
const BuildingTodaySection = dynamic(
  () => import("./buildingTodaySection/index"),
  {}
);
const Button = dynamic(() => import("./button/index"), {});
const CaseStudiesDetailHeroSection = dynamic(
  () => import("./caseStudiesDetailHeroSection/index"),
  { loading: () => <p>Loading...</p> }
);
const CaseStudiesImageOne = dynamic(
  () => import("./caseStudiesimageone/index"),
  {}
);
const CaseStudiesImagetwo = dynamic(
  () => import("./caseStudiesimagetwo/index"),
  {}
);
const ChallangesSolutions = dynamic(
  () => import("./challangesSolutions/index"),
  {}
);
const CompaniesSection = dynamic(() => import("./companiesSection/index"), {});
const ContactSection = dynamic(() => import("./contactSection/index"), {});
const ContactServicesSection = dynamic(
  () => import("./contactServicesSection/index"),
  { loading: () => <p>Loading...</p> }
);
const ContactUsSection = dynamic(() => import("./contactUsSection/index"), {});
const Counter = dynamic(() => import("./counter/index"), {});
const CultureSection = dynamic(() => import("./cultureSection/index"), {});
const DesignElements = dynamic(() => import("./designElements/index"), {});
const Divider = dynamic(() => import("./divider/index"), {});
const DottwarPlateform = dynamic(() => import("./dottwarPlatform/index"), {});
const FAQSection = dynamic(() => import("./faqSection/index"), {});
const Footer = dynamic(() => import("./footer/index"), {});
const Header = dynamic(() => import("./header/index"), {});
const HeadingSection = dynamic(() => import("./headingSection/index"), {});
const HeroSection = dynamic(() => import("./heroSection/index"), {});
const HomeBanner = dynamic(() => import("./homeBanner/index"), {});
const HorizontalSliderSection = dynamic(
  () => import("./horizontalSliderSection/index"),
  { loading: () => <p>Loading...</p> }
);
const InnovationDiariesSection = dynamic(
  () => import("./innovationSection/index"),
  {}
);
const Input = dynamic(() => import("./input/index"), {});
const Modal = dynamic(() => import("./modal/index"), {});
const OurAdvanceWork = dynamic(() => import("./ourAdvanceWork/index"), {});
const OurServices = dynamic(() => import("./ourServices/index"), {});
const Paragraph = dynamic(() => import("./paragraph/index"), {});
const PhoneInputField = dynamic(() => import("./phoneNumberInput/index"), {});
const ProcessSection = dynamic(() => import("./processSection/index"), {});
const ProjectsSection = dynamic(() => import("./projectSection/index"), {});
const ProjectSlider = dynamic(() => import("./projectSlider/index"), {});
const RecentBlogs = dynamic(() => import("./recentBlogs/index"), {});
const SellPointCard = dynamic(() => import("./sellPointCard/index"), {});
const ServicesHeroSection = dynamic(
  () => import("./servicesHeroSection/index"),
  {}
);
const Slider = dynamic(() => import("./slider/index"), {});
const SliderSection = dynamic(() => import("./sliderSection/index"), {});
const TechnologiesSection = dynamic(
  () => import("./technologiesSection/index"),
  {}
);
const Testimonial = dynamic(() => import("./testimonial/index"), {});
const TextArea = dynamic(() => import("./textArea/index"), {});
const Toast = dynamic(() => import("./toast/index"), {});
const TypeButtons = dynamic(() => import("./typeButtons/index"), {});
const UniqueSellPoint = dynamic(() => import("./uniqueSellPoint/index"), {});
const WhyChooseUs = dynamic(() => import("./whyChooseUsSection/index"), {});
const WrapperContainer = dynamic(() => import("./wrapperContainer/index"), {});

export {
  AboutSection,
  AboutTheServiceSection,
  AboutVideo,
  BlogCard,
  BlogIdea,
  BlogsDescription,
  Brief,
  BuildingTodaySection,
  Button,
  CaseStudiesDetailHeroSection,
  CaseStudiesImageOne,
  CaseStudiesImagetwo,
  ChallangesSolutions,
  CompaniesSection,
  ContactSection,
  ContactServicesSection,
  ContactUsSection,
  Counter,
  CultureSection,
  DesignElements,
  Divider,
  DottwarPlateform,
  FAQSection,
  Footer,
  Header,
  HeadingSection,
  HeroSection,
  HomeBanner,
  HorizontalSliderSection,
  InnovationDiariesSection,
  Input,
  Layout,
  Modal,
  OurAdvanceWork,
  OurServices,
  Paragraph,
  PhoneInputField,
  ProcessSection,
  ProjectSlider,
  ProjectsSection,
  RecentBlogs,
  SellPointCard,
  ServicesHeroSection,
  Slider,
  SliderSection,
  TechnologiesSection,
  Testimonial,
  TextArea,
  Toast,
  TypeButtons,
  UniqueSellPoint,
  WhyChooseUs,
  WrapperContainer,
};
