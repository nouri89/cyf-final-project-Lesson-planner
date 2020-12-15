import React from "react";
import "./App.css";

// import bootstrap css file here
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./Header/Header";
import LessonPage_Info from "./LessonPage/LessonPage_Info";
import LessonPage_Volunteers from "./LessonPage/LessonPage_Volunteers";

export default function App() {
    return (
        <div className="App">
            <Header />
            <LessonPage_Info />
            <LessonPage_Volunteers />
        </div>
    );
}
  