import React from "react"
import moment from 'moment';

const LessonsTable = ({el}) =>{
    
 const currentDate = moment().format("DD MM YY");
    /* const RolesButtonHandler = () =>{
<lessonPage/>
    } */

   return(
   
<tr>
      <th scope="row">{el.module}</th>
      <td>{el.Lesson}</td>
      <td>{el.Date}</td>
      <td>{el.Time}</td>
      <td><button type="button" class="btn btn-primary" /* onClick={RolesButtonHandler} */>View Roles</button></td> 
    </tr>
        

    );
}

 



export default LessonsTable;