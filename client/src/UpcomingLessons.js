import React from "react";
import fakeLessons from "./fakeLessons.json"
import LessonsTable from "./LessonsTable"

 const lessons = fakeLessons.lessons;
const UpcomingLessons =()=>{
 

    return(

      <div class="table-responsive-lg">
  <table class="table table-striped table-bordered table-hover table-condensed">
    <thead>
    <tr>
      <th scope="col">module</th>
      <th scope="col">Lesson</th>
      <th scope="col">Date</th>
      <th scope="col">Time</th>
    </tr>
  </thead>
  <tbody>
    {lessons.map(el =>
  
<LessonsTable el={el}/>
  
  
     
  )}
  </tbody>
  </table>
</div>     
    );
}


export default UpcomingLessons;