import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./styles.scss";
import DropdownAction from "../../../component/DropdownAction";
import CustomPagination from "../../../component/Pagination";
import ResetModal from "./ResetModal";
import PTETest from "./PTETest";
import { getListTestExam } from "../../../store/slices/testExam/testExamSlice";

const AllTab = ({ setVisible }) => {
  const { listTestExam } = useSelector((state) => state.testExam);
  // console.log(listTestExam);

  const { key } = useParams();
  // console.log(key, code);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListTestExam(key));
  }, [key]);

  return (
    <div className="all-tab">
      <DropdownAction />
      <div className="all-tab__title">
        <p>Done 0 , Found 741 Questions</p>
        <ResetModal />
      </div>
      <div className="all-tab__pte-test">
        {listTestExam.map((item, index) => (
          <PTETest key={item.id} item={item} setVisible={setVisible} />
        ))}
      </div>
      <div className="all-tab__pagination">
        <CustomPagination />
      </div>
    </div>
  );
};

export default AllTab;
