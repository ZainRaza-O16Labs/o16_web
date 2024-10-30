import { strings } from "@/locales";
import Tags from "../tags";
import WrapperContainer from "../wrapperContainer";
import Paragraph from "../paragraph";

const Brief = ({ description, typeOfWork, industry, year }) => {
  const typesOfWork = typeOfWork?.split(",");
  return (
    <WrapperContainer className={"mb-16"}>
      <div className="md:flex lg:gap-28 gap-10">
        <div className="flex-1">
          <h2 className="text-c_101111 m-0 font-extrabold text-2xl md:text-3xl xl:text-4xl">
            {strings.theBrief}
          </h2>
          <div className="md:mt-4 mt-1 text-c_101010 font-normal 2xl:text-base 2xl:leading-[28px] text-sm" dangerouslySetInnerHTML={{__html: description }}></div>
          
        </div>
        <div className="flex-1">
          <div className="lg:pl-20 mt-10 md:mt-0">
            <h3 className="text-c_101111 m-0 font-extrabold text-lg md:text-xl">
              {strings.industry}
            </h3>
            <p className="text-c_101111 font-normal text-sm md:text-base">
              {industry}
            </p>
            <h3 className="text-c_101111 m-0 font-extrabold text-lg md:text-xl mt-2 md:mt-5 mb-2 md:mb-5">
              {strings.typeofWork}
            </h3>
            <div className="flex flex-wrap gap-2 md:gap-4">
              <Tags tagitems={typesOfWork} />
            </div>
            <h3 className="text-c_101111 m-0 font-extrabold text-lg md:text-xl mt-5">
              {strings.year}
            </h3>
            <p className="text-c_101111 font-normal text-sm md:text-base">
              {year}
            </p>
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default Brief;
