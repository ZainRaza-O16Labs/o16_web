import Image from "next/image";
import WrapperContainer from "../wrapperContainer";

const BlogsDescription = ({ title, date, description, image }) => {
  return (
    <div>
      <WrapperContainer>
        <div className="mb-10 pt-10">
          <div className="grid lg:grid-cols-2 items-center">
            <h1 className="text-c_000101 font-extrabold text-xl md:text-5xl md:leading-normal">
              {title}
            </h1>
            <Image
              src={image}
              alt="Blog Title Image"
              title="Blog Title Image"
              width={3200}
              height={1800}
              className="mx-auto w-auto max-h-[500px] aspect-video rounded-3xl"
            />
          </div>
          {/* <p className="text-c_000000 mt-2 text-sm md:text-base font-normal">
            {dateFormat(date)}
          </p> */}
          <div
            className="text-c_000101 mt-5 md:mt-12 text-sm md:text-lg font-normal"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </WrapperContainer>
    </div>
  );
};

export default BlogsDescription;
