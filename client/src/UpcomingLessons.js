import React from "react";
import fakeLessons from "./fakeLessons.json"

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
    {lessons.map(e =>
    <tr>
      <th scope="row">{e.module}</th>
      <td>{e.Lesson}</td>
      <td>{e.Date}</td>
      <td>{e.Time}</td>
      <td><button type="button" class="btn btn-primary">View Roles</button></td>
      
    </tr>
   
    )
}
  </tbody>
  </table>
</div>     
    );
}


export default UpcomingLessons;