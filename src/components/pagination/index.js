import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = () => {
  return (
    <div>
      <ReactPaginate
        containerClassName="flex gap-4 items-center justify-center"
        previousAriaLabel={"previous"}
        previousLabel="<"
        nextLabel={">"}
        marginPagesDisplayed={"3"}
        pageCount={3}
        pageClassName="md:text-lg text-sm text-c_ABABAB hover:text-c_089DE5"
        previousClassName="md:text-lg text-sm border-c_DEDEDE border rounded-full md:px-3 px-2 md:pb-1 hover:text-c_089DE5 hover:border-c_089DE5 text-c_DEDEDE"
        nextClassName="md:text-lg text-sm border-c_DEDEDE border rounded-full md:px-3 px-2 md:pb-1 hover:text-c_089DE5 hover:border-c_089DE5 text-c_DEDEDE"
      />
    </div>
  );
};

export default Pagination;
