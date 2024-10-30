import React from "react";
import WrapperContainer from "../wrapperContainer";
import ChallangesSolutionsCard from "../challangesSolutionsCard";
import { strings } from "@/locales";

const ChallangesSolutions = ({ challenges, solutions }) => {
  return (
    <WrapperContainer className={"mb-16"}>
      <div className="">
        <div className="mb-4">
          <ChallangesSolutionsCard
            BgClassName={`bg-c_F62F2F`}
            title={strings.challaenges}
            details={challenges}
          />
        </div>
        <div className="">
          <ChallangesSolutionsCard
            BgClassName={`bg-C_00C714`}
            title={strings.solutions}
            details={solutions}
          />
        </div>
      </div>
    </WrapperContainer>
  );
};

export default ChallangesSolutions;
