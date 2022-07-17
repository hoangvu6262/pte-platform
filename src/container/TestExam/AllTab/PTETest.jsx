import React from "react";
import { Tag } from "antd";
import { TagFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

const PTETest = ({ item, setVisible }) => {
  const { code } = useParams();

  return (
    <div className="pte-test">
      <div className="pte-test__left">
        <Link
          onClick={() => setVisible(false)}
          to={item.part + "/" + item.key + "/" + item.code}
          disabled={item.code === code}
        >
          #{item.name}
        </Link>
        <Tag className="pte-test__tag">#{item.code}</Tag>
      </div>
      <div className="pte-test__right">
        <Tag className="pte-test__tag">Undone</Tag>
        <TagFilled className="pte-test__tag-icon" />
      </div>
    </div>
  );
};

export default PTETest;
