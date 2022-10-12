import { useRef, useState } from "react";

function Button({ onClick, children }) {
	return (
		<button
			style={{
				width: "100px",
				height: "100px",
				borderRadius: "10px",
				border: 0,
			}}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

function Container({ text, onDelete, idx }) {
	// 컴포넌트 명에서는 Pascal Case를 사용한다
	return (
		<div>
			{text}
			<button onClick={() => onDelete(idx)}>삭제</button>
		</div>
	);
}

function App() {
	const ref = useRef();
	const [data, setData] = useState(["Hello", "Name"]);

	const onClick = () => {
		setData([ref.current.value, ...data]);
		ref.current.value = "";
	};

	const onDelete = (idx) => {
		// console.log(idx);

		// 0번째인지 첫번째인지 알수 있다
		setData((currentValue) => {
			const newValue = currentValue.filter((value, currentIndex) => {
				if (currentIndex === idx) {
					return false;
				} else {
					return true;
				}
			});
			return newValue;
		});
	};

	return (
		<div>
			<input type="text" ref={ref} />
			<Button onClick={onClick}>dafewaw</Button>
			{data.map((value, idx) => {
				return (
					<Container onDelete={onDelete} text={value} idx={idx} key={idx} />
				);
			})}
			{/* {data.map((value, idx) => {
				return (
					<div key={idx}>
						{value}
						<button>수정</button>
						<button onClick={() => onDelete(idx)}>삭제</button>
					</div>
				);
			})} */}
			{/* <Container text="안녕" name="바이" /> */}
		</div>
	);
}

export default App;
