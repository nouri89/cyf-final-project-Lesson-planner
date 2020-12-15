import React from "react";

const LessonPage_Volunteers = () => {
  return (
    <div>
      <h2 className="text-center">People Volunteering:</h2>
      <table className="table table-striped table-bordered table-hover table-condensed">
        <tbody>
          <tr className="table-danger">
            <td>Claire Bickley</td>
            <td>Regional Manager</td>
          </tr>
          <tr className="table-warning">
            <td>Emile Pafford-Wray</td>
            <td>Lead Teacher</td>
          </tr>
          <tr className="table-success">
            <td>Nadir</td>
            <td>Teaching Assistant</td>
          </tr>
          <tr className="table-success">
            <td>Nick Holdsworth</td>
            <td>Teaching Assistant</td>
          </tr>
          <tr className="table-success">
            <td>Wahab Rahman</td>
            <td>Teaching Assistant</td>
          </tr>
          <tr className="table-info">
            <td>Edgar Endiulis</td>
            <td>Personal Deveopment Rep</td>
          </tr>
          <tr className="table-primary">
            <td>Shukri</td>
            <td>Zoom Admin</td>
          </tr>
          <tr className="table-secondary">
            <td>Atanas Kozarev</td>
            <td>Host</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LessonPage_Volunteers;