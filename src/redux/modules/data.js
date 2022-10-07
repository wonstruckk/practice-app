const ADD = "DATA/ADD";

export const addData = (title, content) => {
	return {
		type: ADD,
		title,
		content,
	};
};

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
const data = (state = initialState, action) => {
	switch (action.type) {
		case ADD:
			return {
				list: [
					...state.list,
					{
						id: state.list.length,
						title: action.title,
						content: action.content,
					},
				],
			};
		default:
			return state;
	}
};

export default data;
