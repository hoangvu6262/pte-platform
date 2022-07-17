import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import answerSlices from "./slices/answer/answerSlice";
import discussSlices from "./slices/discuss/discussSlice";
import testExamSlices from "./slices/testExam/testExamSlice";

const store = configureStore({
  reducer: {
    answer: answerSlices.reducer,
    discuss: discussSlices.reducer,
    testExam: testExamSlices.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
