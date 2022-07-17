import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { listSpeaking } from "../../../data/speakingTestExam";
import { listWriting } from "../../../data/writingTestExam";
import { listReading } from "../../../data/readingTestExam";
import { listListening } from "../../../data/listeningTestExam";

import { listContentDrawer } from "../../../data/contentDrawer";

const combineList = [...listSpeaking, ...listWriting, ...listReading, ...listListening]

const testExamSlices = createSlice({
  name: "testExam",
  initialState: {
    headerDrawer: {},
    testExamDetail: {},
    listTestExam: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListTestExam.fulfilled, (state, { payload }) => {
      state.listTestExam = payload;
    });
    builder.addCase(getTestExamDetail.fulfilled, (state, { payload }) => {
      state.testExamDetail = payload[0];
    });
    builder.addCase(getHeaderDrawer.fulfilled, (state, { payload }) => {
      state.headerDrawer = payload[0];
    });
  },
});

export default testExamSlices;

export const getListTestExam = createAsyncThunk(
  "test-exam/getListTestExam",
  async (key) => {
    const list = combineList.filter((item) => item.key === key);
    return list;
  }
);

export const getTestExamDetail = createAsyncThunk(
  "test-exam/getTestExamDetail",
  async ({ key, code }) => {
    const list = combineList.filter(
      (item) => item.key === key && item.code === code
    );
    return list;
  }
);

export const getHeaderDrawer = createAsyncThunk(
  "test-exam/getHeaderDrawer",
  async (key) => {
    const item = listContentDrawer.filter((item) => item.id === key);
    return item;
  }
);
