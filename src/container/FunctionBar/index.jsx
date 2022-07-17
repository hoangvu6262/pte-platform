import React from "react";
import { Switch } from "antd";
import { FileTextOutlined } from "@ant-design/icons";
import { useLocation, useParams, useNavigate } from "react-router-dom";

import answerSlices, {
  submitAnswer,
} from "../../store/slices/answer/answerSlice";

import { useDispatch, useSelector } from "react-redux/es/exports";

import "./styles.scss";
import Button from "../../component/Button";

const FunctionBar = ({ toggleAnswer, openModal }) => {
  // const { openModal, toggleAnswer } = useContext(PractiseContext);
  const { status } = useSelector((state) => state.answer);
  const { code } = useParams();
  const { testExamDetail, listTestExam } = useSelector(
    (state) => state.testExam
  );

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const link = pathname.split(code);
  // console.log(link[0]);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(submitAnswer());
  };

  return (
    <div className="function-bar">
      <div className="function-bar__left">
        <Button
          size="small"
          disabled={status === 2 ? false : true}
          onClick={handleClick}
        >
          Submit
        </Button>
        <Button
          size="small"
          onClick={() => {
            dispatch(answerSlices.actions.redoAnswering());
          }}
        >
          Re-do
        </Button>
        <div
          className="function-bar__btn"
          onClick={() => {
            openModal();
          }}
        >
          <Button outline={true} size="small">
            <FileTextOutlined /> Dict-Mode
          </Button>
        </div>

        <Switch
          className="function-bar__left-switch"
          checkedChildren="Answer"
          unCheckedChildren="Answer"
          onChange={() => {
            toggleAnswer();
          }}
        />
      </div>
      <div className="function-bar__right">
        <div className="function-bar__btn">
          <Button
            size="small"
            onClick={() =>
              navigate(link[0] + (parseInt(testExamDetail.code) + 1))
            }
            disabled={testExamDetail.id === 0}
          >
            Previous
          </Button>
        </div>
        <div className="function-bar__btn">
          <Button
            size="small"
            onClick={() =>
              navigate(link[0] + (parseInt(testExamDetail.code) - 1))
            }
            disabled={testExamDetail.id === listTestExam.length - 1}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FunctionBar;
