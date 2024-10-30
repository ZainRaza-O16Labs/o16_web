import { BlogsDescription, Layout, RecentBlogs } from "@/components";
import { getBlogDetail, getRelatedBlogs } from "@/services/blogs";
import { wrapper } from "@/store";

const index = ({ blog, relatedBlogs }) => {
  const data = blog?.data[0];
  const metadata = {
    title: data?.yoast_head_json?.title,
    description: data?.yoast_head_json?.description,
  };
  return (
    <Layout metadata={metadata}>
      <BlogsDescription
        title={data?.acf?.title}
        image={data?.acf?.image}
        date={data?.date}
        description={data?.acf?.content}
      />
      <RecentBlogs data={relatedBlogs?.data} />
    </Layout>
  );
};

export default index;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const getBlogDetailResponse = await store.dispatch(
      getBlogDetail.initiate(context.params.slug)
    );
    const getRelatedBlogsResponse = await store.dispatch(
      getRelatedBlogs.initiate(getBlogDetailResponse?.data[0]?.id)
    );
    return {
      props: {
        blog: getBlogDetailResponse,
        relatedBlogs: getRelatedBlogsResponse,
      },
    };
  }
);
