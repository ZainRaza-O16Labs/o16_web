import React from "react";
import { ThreeCircles } from "react-loader-spinner";
export const index = () => {
  return (
    <div className="flex min-h-[100vh] justify-center items-center">
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default index;
