import React from "react"
import moment from 'moment';


const LessonsTable = ({el,RolesButtonHandler}) =>{
    
 const currentDate = moment().format("DD MM YY");
   

   return(
   
<tr>
      <td>{el.module}</td>
      <td>{el.Lesson}</td>
      <td>{el.Date}</td>
      <td>{el.Time}</td>
      <td><button type="button" class="btn btn-primary"  onClick={()=>RolesButtonHandler(el.id)}>View Roles</button></td> 
    </tr>
        

    );
}

 



export default LessonsTable;