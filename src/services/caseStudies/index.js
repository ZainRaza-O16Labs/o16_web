import { baseApi } from "../api";

const { Endpoints } = require("@/api/Endpoints");
const { ApiMethod } = require("@/constants/Api.constants");

const getCaseStudiesApi = () => {
  return {
    method: ApiMethod.get,
    url: Endpoints.caseStudies,
  };
};

const getSingleCaseStudyApi = (slug) => {
  return {
    method: ApiMethod.get,
    url: Endpoints.caseStudies + "?slug=" + slug,
  };
};

const getAllCaseStudiesParticularServiceApi = (id) => {
  return {
    method: ApiMethod.get,
    url: Endpoints.caseStudies + "?categories=" + id,
  };
};

const getMultipleCaseStudiesFromIdsApi = (ids) => {
  return {
    method: ApiMethod.get,
    url: Endpoints.caseStudies + "?include=" + ids,
  };
};

export const CaseStudies = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCaseStudies: build.query({
      query: getCaseStudiesApi,
    }),
    getSingleCaseStudy: build.query({
      query: getSingleCaseStudyApi,
    }),
    getAllCaseStudiesParticularService: build.query({
      query: getAllCaseStudiesParticularServiceApi,
    }),
    getMultipleCaseStudiesFromIds: build.query({
      query: getMultipleCaseStudiesFromIdsApi,
    }),
  }),
  overrideExisting: true,
});

export const {
  useLazyGetCaseStudiesQuery,
  useLazyGetSingleCaseStudyQuery,
  useLazyGetAllCaseStudiesParticularServiceQuery,
  useLazyGetMultipleCaseStudiesFromIdsQuery,
} = CaseStudies;

export const {
  getCaseStudies,
  getSingleCaseStudy,
  getMultipleCaseStudiesFromIds,
  getAllCaseStudiesParticularService,
} = CaseStudies.endpoints;
