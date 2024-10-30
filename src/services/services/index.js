/** @format */

import { ApiMethod } from "@/constants/Api.constants";
import { baseApi } from "../api";
import { Endpoints } from "@/api/Endpoints";

const getServicesApi = () => {
  return {
    url: Endpoints.services,
    method: ApiMethod.get,
  };
};
const getSingleServiceApi = (slug) => {
  return {
    url: Endpoints.services + "?slug=" + slug,
    method: ApiMethod.get,
  };
};

export const Services = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getServices: build.query({
      query: getServicesApi,
    }),
    getSingleService: build.query({
      query: getSingleServiceApi,
    }),
  }),

  overrideExisting: true,
});

export const { useLazyGetServicesQuery, useLazyGetSingleServiceQuery } =
  Services;

export const { getServices, getSingleService } = Services.endpoints;
