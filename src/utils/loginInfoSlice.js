import { createSlice } from "@reduxjs/toolkit";

const loginInfoSlice = createSlice({
  name: "loginInfo",
  initialState: {
    info: null,
    connections: [],
    feed: [],
    requests: {
      interested: [],
      ignored: [],
    },
    friendRequest :[],
  },
  reducers: {
    addInfo: (state, action) => {
      state.info = action.payload;
    },
    clearLoggedInInfo: (state) => {
      state.info = null;
    },
    addConnections: (state, action) => {
      state.connections = action.payload;
    },
    updateInfo: (state, action) => {
      state.info = { ...state.info, ...action.payload };
    },
    addFeed: (state, action) => {
      state.feed = action.payload;
    },

    // 👇 Updated reducers: guard against undefined requests
    addInterestedRequest: (state, action) => {
      if (!state.requests) {
        state.requests = { interested: [], ignored: [] };
      }
      state.requests.interested.push(action.payload);
    },
    addIgnoredRequest: (state, action) => {
      if (!state.requests) {
        state.requests = { interested: [], ignored: [] };
      }
      state.requests.ignored.push(action.payload);
    },
    clearRequests: (state) => {
      state.requests = { interested: [], ignored: [] };
    },
    addFriendRequest: (state, action) => {
      state.friendRequest = action.payload;
    },
  },
   
});

export default loginInfoSlice.reducer;

export const {
  addInfo,
  clearLoggedInInfo,
  updateInfo,
  addConnections,
  addFeed,
  addInterestedRequest,
  addIgnoredRequest,
  clearRequests,
  addFriendRequest
} = loginInfoSlice.actions;
