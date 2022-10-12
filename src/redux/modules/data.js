import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	list: [
		{
			id: 0,
			title: "제목",
			content: "내용",
		},
		{
			id: 1,
			title: "제목2",
			content: "내용2",
		},
	],
};

// 리듀서
// 불변성을 대신 처리해줌
// immer 라이브러리가 중간에서 우리가 신경쓰지 않아도 되게 불변성을 유지시켜줌
export const data = createSlice({
	name: "data",
	initialState,
	reducers: {
		add: (state, action) => {
			// id
			state.push(action.payload); // action.state, action.payload
		},
		remove: (state, action) => {
			state.list = state.list.filter((item) => item.id !== action.payload);
		},
	},
});

export const { add, minus } = data.actions;
export default data.reducer;
