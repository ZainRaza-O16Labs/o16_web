/** @format */

import { ApiMethod } from "@/constants/Api.constants";
import { baseApi } from "../api";
import { Endpoints } from "@/api/Endpoints";

const getReviewsApi = () => {
  return {
    url: Endpoints.review,
    method: ApiMethod.get,
  };
};

export const Reviews = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getReviews: build.query({
      query: getReviewsApi,
    }),
  }),

  overrideExisting: true,
});

export const { useLazyGetReviewsQuery, useLazyGetSingleCategoryQuery } =
  Reviews;

export const { getReviews, getSingleCategory } = Reviews.endpoints;
