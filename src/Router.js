import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/:id" element={<Detail />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
