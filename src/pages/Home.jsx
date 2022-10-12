import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../redux/modules/data";

function Home() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const dataList = useSelector((state) => state.data.list);
	const move = (id) => {
		dispatch(add({ id: id, name: "test" }));
		navigate(`/${id}`);
	};

	useEffect(() => {
		axios.get("http://localhost:3001/list").then((response) => {
			console.log(response.data);
		});
	}, []);
	return (
		<div>
			{dataList.map((data, index) => {
				return (
					<div key={index}>
						<h1>{data.title}</h1>
						<p>{data.content}</p>
						<button onClick={() => move(data.id)}>상세페이지로 이동</button>
					</div>
				);
			})}
		</div>
	);
}

export default Home;
