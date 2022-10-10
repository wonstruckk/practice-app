import { useEffect } from "react";
import { ThemeProvider } from "styled-components";

function App() {
	useEffect(() => {}, []);

	return (
		<ThemeProvider
			theme={{
				color: {
					red: "#ff0000",
				},
			}}
		>
			<div>
				<h1>안녕</h1>
				<button>버튼2</button>
			</div>
		</ThemeProvider>
	);
}

export default App;
