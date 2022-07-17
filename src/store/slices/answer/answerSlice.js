import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import discussSlices from "../discuss/discussSlice";

/**
 * status:
 * 1: not submit.
 * 2: answering.
 * 3: submitted.
 */

const answerSlices = createSlice({
  name: "answer",
  initialState: {
    status: 1,
    content: "",
    isSpeaking: false,
  },
  reducers: {
    updateAnswering: (state, action) => {
      state.status = 2;
      state.content = action.payload;
    },
    getAnswerContent: (state, action) => {
      return state.content;
    },
    redoAnswering: (state, action) => {
      state.status = 1;
      state.content = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(submitAnswer.fulfilled, (state, action) => {
      state.status = 3;
    });
    builder.addCase(changeIsSpeaking.fulfilled, (state, { payload }) => {
      state.isSpeaking = payload;
    });
  },
});

export default answerSlices;

export const submitAnswer = createAsyncThunk(
  "answer/submit",
  (data, thunkAPI) => {
    const answer = thunkAPI.getState().answer.content;
    thunkAPI.dispatch(discussSlices.actions.updateAnswer(answer));
  }
);

export const changeIsSpeaking = createAsyncThunk(
  "answer/changeIsSpeaking",
  (data) => {
    return data;
  }
);
