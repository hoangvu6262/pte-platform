import React from "react";
import { Tabs } from "antd";
import { useDispatch } from "react-redux";

import { changeTabKey } from "../../store/slices/discuss/discussSlice";

const CustomTab = ({ children }) => {
  const dispatch = useDispatch();

  const onChange = (key) => {
    // console.log(key);
    dispatch(changeTabKey(key));
  };
  return (
    <div>
      <Tabs onChange={onChange} type="card">
        {children}
      </Tabs>
    </div>
  );
};

export default CustomTab;
