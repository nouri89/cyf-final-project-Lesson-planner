import React from "react"
import moment from 'moment';
import { Link } from "react-router-dom";


const LessonsTable = ({el,RolesButtonHandler}) =>{
    
 const currentDate = moment().format("DD MM YY");
   

   return(
   
<tr>
      <td>{el.id}</td>
      <td>{el.module}</td>
      <td>{el.Lesson}</td>
      <td>{el.Date}</td>
      <td>{el.Time}</td>
      <td><Link to="/LessonPage"><button type="button" class="nav_Home rolesBTN"  onClick={()=>RolesButtonHandler(el.id)}>View Vacancies</button></Link></td> 
    </tr>
        

    );
}

 



export default LessonsTable;