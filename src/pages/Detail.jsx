import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
	const { id } = useParams();
	const data = useSelector((state) => state.data.list);
	// crud

	console.log(data);
	return (
		<div>
			{data.title}
			{data.content}
		</div>
	);
}

export default Detail;
