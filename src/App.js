import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addData } from "./redux/modules/data";

function App() {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.data);
	const input1 = useRef(null);
	const input2 = useRef(null);

	const onClick = () => {
		dispatch(addData(input1.current.value, input2.current.value));
		input1.current.value = "";
		input2.current.value = "";
	};

	return (
		<div>
			<input type="text" ref={input1} />
			<input type="text" ref={input2} />
			<button onClick={onClick}>버튼</button>
			{data.list.map((item, idx) => {
				return (
					<div key={idx}>
						<h1>{item.title}</h1>
						<p>{item.content}</p>
					</div>
				);
			})}
		</div>
	);
}

export default App;
