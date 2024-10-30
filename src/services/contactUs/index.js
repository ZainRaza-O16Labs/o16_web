/** @format */

import { ApiMethod } from "@/constants/Api.constants";
import { baseApi } from "../api";
import { Endpoints } from "@/api/Endpoints";

const postContactUsApi = (data) => {
  return {
    url: Endpoints.contactUs,
    method: ApiMethod.post,
    body: data,
  };
};

export const ContactUs = baseApi.injectEndpoints({
  endpoints: (build) => ({
    postContactUs: build.mutation({
      query: postContactUsApi,
    }),
  }),

  overrideExisting: true,
});

export const { usePostContactUsMutation } = ContactUs;

export const { postContactUs } = ContactUs.endpoints;
