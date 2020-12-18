import React from "react";
import fakeLessons from "./fakeLessons.json"
import LessonsTable from "./LessonsTable"
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

 const lessons = fakeLessons.lessons;
const UpcomingLessons =({RolesButtonHandler})=>{
 

    return(
      <div>
<Header />
      <div class="table-responsive-lg">
  <table class="table table-striped table-bordered table-hover table-condensed">
    <thead>
    <tr>
      <th scope="col">module</th>
      <th scope="col">Lesson</th>
      <th scope="col">Date</th>
      <th scope="col">Time</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {lessons.map(el =>
  
<LessonsTable el={el} RolesButtonHandler={RolesButtonHandler}/>
  
  
     
  )}
  </tbody>
  </table>
</div>  
<Footer />
      </div>
      
    
    );
}


export default UpcomingLessons;