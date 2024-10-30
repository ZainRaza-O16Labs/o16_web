import { baseApi } from "../api";

const { Endpoints } = require("@/api/Endpoints");
const { ApiMethod } = require("@/constants/Api.constants");

const getBlogsApi = () => {
  return {
    method: ApiMethod.get,
    url: Endpoints.blog,
  };
};

const getBlogDetailApi = (slug) => {
  return {
    method: ApiMethod.get,
    url: Endpoints.blog + `?slug=${slug}`,
  };
};

const getRelatedBlogsApi = (exclude) => {
  return {
    method: ApiMethod.get,
    url: Endpoints.blog + `?exclude=${exclude}&per_page=5`,
  };
};

export const Blogs = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getBlogs: build.query({
      query: getBlogsApi,
    }),
    getBlogDetail: build.query({
      query: getBlogDetailApi,
    }),
    getRelatedBlogs: build.query({
      query: getRelatedBlogsApi,
    }),
  }),
  overrideExisting: true,
});

export const {
  useLazyGetBlogsQuery,
  useLazyGetRelatedBlogsQuery,
  useLazyGetBlogDetailQuery,
} = Blogs;

export const { getBlogs, getRelatedBlogs, getBlogDetail } = Blogs.endpoints;
