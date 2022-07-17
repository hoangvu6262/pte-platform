import React from "react";
import { Pagination } from "antd";

const onChange = (pageNumber) => {
  console.log("Page: ", pageNumber);
};

const CustomPagination = () => (
  <>
    <Pagination
      showQuickJumper
      defaultCurrent={2}
      total={500}
      showSizeChanger={false}
      onChange={onChange}
    />
  </>
);

export default CustomPagination;
