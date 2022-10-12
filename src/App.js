import { useEffect } from "react";
import { useRef, useState } from "react";

function App() {
	// 참조
	const dataRef = useRef(null);

	// useState Read, Add, Modify, Delete
	const [list, setList] = useState(["텍스트1", "텍스트2", "텍스트3"]);

	const inputClick = () => {
		setList([...list, dataRef.current.value]);
	};

	const onClick = () => {
		// 불변성을 유지해야 한다는 규칙이 있음.
		setList([...list, "텍스트4"]);
	};

	const onModify = (value) => {
		setList(
			list.map((text) => {
				if (value === text) {
					return "텍스트 수정";
				} else {
					return text;
				}
			})
		);
	};

	const onDelete = (value) => {
		// filter
		setList(
			list.filter((text) => {
				if (value === text) {
					return false;
				} else {
					return true;
				}
			})
		);
	};

	const onModifyIdx = (idx) => {
		// 0, 1, 2
		setList((currentValue) => {
			const newList = [...currentValue]; // 새 배열을 만듬 (불변성을 유지해야 하기 때문에)
			newList[idx] = "다른 텍스트";
			return newList;
		});
	};

	const onDeleteIdx = (idx) => {
		setList((currentValue) => {
			const newList = [...currentValue];
			newList.splice(idx, 1);
			return newList;
		});
	};

	return (
		<div>
			<input type="text" ref={dataRef} />
			<button onClick={inputClick}>input Clicked</button>
			<h1>제목</h1>
			{list.map((value, idx) => {
				// 텍스트1, 텍스트2, 텍스트3
				// map은 데이터를 반복해서 수정할 때 사용
				return (
					<div key={idx}>
						<div>{value}</div>
						<button onClick={() => onModify(value)}>수정하기</button>
						<button onClick={() => onDelete(value)}>삭제하기</button>

						<button onClick={() => onModifyIdx(idx)}>수정하기idx</button>
						<button onClick={() => onDeleteIdx(idx)}>삭제하기idx</button>
					</div>
				); // [텍스트1A, 텍스트2A, 텍스트3A]
			})}
			<button onClick={onClick}>버튼</button>
		</div>
	);
}

export default App;
