import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { listAnswer, listBoard, listDiscussion } from "../../../data/data";

const discussSlices = createSlice({
  name: "discuss",
  initialState: {
    listDiscussion: [],
    listBoard: [],
    listAnswer: [],
    tabKey: 1,
  },
  reducers: {
    updateAnswer: (state, action) => {
      const data = {
        id: state.listAnswer.length + 1,
        name: "Vu Cao",
        content: action.payload,
        avatar:
          "https://dl26yht2ovo33.cloudfront.net/public/system/users/images/000/110/583/original/ape3.png",
        parentId: null,
        date: "2022-07-02",
      };
      state.listAnswer.push(data);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addDiscussion.fulfilled, (state, { payload }) => {
      switch (state.tabKey) {
        case 2: {
          state.listBoard.push(payload);
          break;
        }
        case 3: {
          state.listAnswer.push(payload);
          break;
        }
        default: {
          state.listDiscussion.push(payload);
        }
      }
    });
    builder.addCase(addAnswer.fulfilled, (state, { payload }) => {
      state.listAnswer.push(payload);
    });
    builder.addCase(getListDiscussionTab.fulfilled, (state, { payload }) => {
      state.listDiscussion = payload;
    });
    builder.addCase(getListBoardTab.fulfilled, (state, { payload }) => {
      state.listBoard = payload;
    });
    builder.addCase(getListAnswerTab.fulfilled, (state, { payload }) => {
      state.listAnswer = payload;
    });
    builder.addCase(changeTabKey.fulfilled, (state, { payload }) => {
      state.tabKey = parseInt(payload);
    });
  },
});

export default discussSlices;

/**
 * actions:
 *  addDiscussion(data)
 *  addAnswer(data)
 *  getListDiscussionTab()
 *  getListBoardTab()
 *  getListBoardAudioTab()
 *  getListAnswerTab()
 *  changeTabKey(key)
 */

export const addDiscussion = createAsyncThunk(
  "discuss/addDiscussion",
  async (data) => {
    return data;
  }
);

export const addAnswer = createAsyncThunk("discuss/addAswer", async (data) => {
  return data;
});

export const getListDiscussionTab = createAsyncThunk(
  "discuss/getListDiscussionTab",
  async () => {
    return listDiscussion;
  }
);

export const getListBoardTab = createAsyncThunk(
  "discuss/getListBoardTab",
  async () => {
    return listBoard;
  }
);

export const getListAnswerTab = createAsyncThunk(
  "discuss/getListAnswerTab",
  async () => {
    return listAnswer;
  }
);

export const changeTabKey = createAsyncThunk(
  "discuss/changeTabKey",
  async (key) => {
    return key;
  }
);
