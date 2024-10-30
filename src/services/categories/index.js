/** @format */

import { ApiMethod } from "@/constants/Api.constants";
import { baseApi } from "../api";
import { Endpoints } from "@/api/Endpoints";

const getCategoriesApi = () => {
  return {
    url: Endpoints.categories,
    method: ApiMethod.get,
  };
};

const getSingleCategoryApi = (slug) => {
  return {
    url: Endpoints.categories + "?slug=" + slug,
    method: ApiMethod.get,
  };
};

export const Categories = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query({
      query: getCategoriesApi,
    }),
    getSingleCategory: build.query({
      query: getSingleCategoryApi,
    }),
  }),

  overrideExisting: true,
});

export const { useLazyGetCategoriesQuery, useLazyGetSingleCategoryQuery } =
  Categories;

export const { getCategories, getSingleCategory } = Categories.endpoints;
