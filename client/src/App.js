import React, { useEffect, useState } from "react";

import "./App.css";

// import bootstrap css file here
import 'bootstrap/dist/css/bootstrap.min.css';

import { getMessage } from "./service";
import logo from "./logo.svg";
import UpcomingLessons from "./UpcomingLessons";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import LessonPage from "./LessonPage/LessonPage";
export function App() {

	const [viewRolesButtonClicked, setViewRolesButtonClicked] = useState(false);
	const [lessonId, setLessonId] = useState();
  const RolesButtonHandler = (id) =>{
		setViewRolesButtonClicked(true);
    	setLessonId(id);
    } 

//

	const [message, setMessage] = useState("Loading...");

	useEffect(() => {
		getMessage().then((message) => setMessage(message));
	}, []);

	return (
		<main role="main">
			<div>
				 {!viewRolesButtonClicked? (<UpcomingLessons RolesButtonHandler={RolesButtonHandler}/>) : null}
				  {viewRolesButtonClicked? (<LessonPage lessonId={lessonId}/>) : null}
                 
			</div>
			

			
		</main>
	);
}

export default App;
