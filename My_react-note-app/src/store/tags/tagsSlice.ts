import { createSlice } from "@reduxjs/toolkit";
import { Tag } from "styled-components/dist/sheet/types";
import { v4 } from "uuid";

interface TagState {
  tagsList: Tag[];
}

const initialState: TagState = {
  tagsList: [
    { tag: "learnings", id: v4() }, //v4 : 유니크한 값 생성
    { tag: "work", id: v4() },
    { tag: "quotes", id: v4() },
  ],
};

const tagSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
});

export default tagSlice.reducer;
