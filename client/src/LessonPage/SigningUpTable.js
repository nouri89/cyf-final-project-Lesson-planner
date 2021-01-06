import React from "react";
import fakeLessons from "../fakeLessons.json"
import fakeSignningUptable from "../fakeSignningUptable.json"


const signUps = fakeSignningUptable.signUps;

const SigningUpTable = () => {
  return (
    <div>
      <h2 className="text-center">Lesson Sign Up</h2>

      <table>
    <thead>
    <tr>
      <th>Role</th>
      <th>Capacity</th>
      <th>Vacancies</th>
      <th>Volunteers</th>
      <th></th>
    </tr>
  </thead>
  <tbody className="firstRow">
    {signUps.map(el =>
    <tr>
      <td>{el.Role}</td>
      <td>{el.Capacity}</td>
      <td>{el.Vacancies}</td>
      <td>{el.Volunteers}</td>
      <td><button type="button" class="nav_Home rolesBTN"  >volunteer!</button></td> 
    </tr>
    )}
  </tbody>
  </table>
    </div>
  );
};

export default SigningUpTable;