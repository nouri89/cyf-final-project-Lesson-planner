import React, { useEffect, useState } from "react";

import "./App.css";

// import bootstrap css file here
import 'bootstrap/dist/css/bootstrap.min.css';

import { getMessage } from "./service";
import logo from "./logo.svg";
import UpcomingLessons from "./UpcomingLessons";
import LessonPage from "./LessonPage/LessonPage";

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

			<LessonPage />
		</main>
	);
}

export default App;
