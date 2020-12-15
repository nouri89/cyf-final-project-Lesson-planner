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
				<h1>Test Hussein</h1>
				<img className="logo" data-qa="logo" src={logo} alt="Just the React logo" />
				<h1 className="message" data-qa="message">{message}</h1>
			</div>
		</main>
	);
}

export default App;
