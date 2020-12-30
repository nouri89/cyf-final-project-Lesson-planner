import React from "react";
import SignUpTable from "./SignUpTable"
// import bootstrap css file here
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "../Header/Header";
import LessonPage_Info from "./LessonPage_Info";
//import LessonPage_Volunteers from "./LessonPage_Volunteers";
import Footer from "../Footer/Footer";


const LessonPage = ({lessonId}) => {
    return (
        <div className="App">
            <Header />
            <h1>Lesson id: {lessonId}</h1>
            <LessonPage_Info />
            <SignUpTable/>
            <Footer />
        </div>
    );
}
  
export default LessonPage; 