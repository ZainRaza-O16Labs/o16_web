import {
  AgileMethodologies,
  BespokeSolutions,
  ClientCentricCollaboration,
  EndToEndExpertise,
  InnovativeVisionaries,
  ProvenTrackRecord,
} from "../../public/images";

const { strings } = require("@/locales");

const cardItems = [
  {
    image: EndToEndExpertise,
    title: strings.innovativeVisionaries,
    description: strings.wePrideOurselves,
  },
  {
    image: InnovativeVisionaries,
    title: strings.bespokeSolutionsUnmatchedFlexibility,
    description: strings.unlikeTheOnesize,
  },
  {
    image: AgileMethodologies,
    title: strings.agileMethodologiesForSwiftProgress,
    description: strings.ourAdoptionOfAgile,
  },
  {
    image: BespokeSolutions,
    title: strings.endToEndExpertise,
    description: strings.fromCconceptualization,
  },
  {
    image: ClientCentricCollaboration,
    title: strings.ClientCentricCollaboration,
    description: strings.weBelieveInTransparent,
  },
  {
    image: ProvenTrackRecord,
    title: strings.provenTrackRecordOfSuccess,
    description: strings.OurPortfolioIsaTestament,
  },
];

export { cardItems };
