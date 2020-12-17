import React, { useEffect, useState } from "react";

import "./App.css";
import { getMessage } from "./service";
import logo from "./logo.svg";
import UpcomingLessons from "./UpcomingLessons";

export function App() {
	const [message, setMessage] = useState("Loading...");

	useEffect(() => {
		getMessage().then((message) => setMessage(message));
	}, []);

	return (
		<main role="main">

			<div>
				<UpcomingLessons/>
			</div>
		</main>
	);
}

export default App;
