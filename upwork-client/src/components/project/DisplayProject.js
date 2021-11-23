import React, { useEffect, useState } from "react";
import phoneImage from "../Images/phoneImage.png";
import emailImage from "../Images/emailImage1.png";
import AuthService from "../../services/auth.service";

const DisplayProject = (props) => {
  const [disable, setDisable] = React.useState(true);
  useEffect(() => {
    const user = AuthService.getCurrentUser();

    console.log("props.project", props.project);
    if (user.id === props.project.user) {
      setDisable(false);
    }
  }, [props.project]);

  return (
    <div>
      <hi> {props.project.name} </hi>

      <div class="projectShow" style={{ marginLeft: "20rem", padding: "auto" }}>
        {props.project.skills && (
          <div div class="skills">
            <h4> Professional Skills Required:</h4>
            {props.project.skills.map((skill) => (
              <span>{skill}</span>
            ))}
          </div>
        )}
        <h4> Job Description:</h4>
        <p> {props.project.description}</p>
        <h5>
          {" "}
          PaymentType: <span>{props.project.paymentType}</span>{" "}
        </h5>{" "}
        <br />
        <h5>
          {" "}
          EstimatedBudget $: <span>{props.project.estimatedBudget}</span>{" "}
        </h5>{" "}
        <br />
        <h5>
          {" "}
          Date posted : <span>{props.project.datePosted}</span>{" "}
        </h5>{" "}
        <br />
        <div>
          <img
            id="phoneImage"
            src={phoneImage}
            alt={props.project.phone}
            height="20"
            width="20"
          />
          <span id="phone" class="contact">
            {props.project.phone}
          </span>
        </div>
        <div>
          <img
            id="emailImage"
            src={emailImage}
            alt={props.project.projectemail}
            height="20"
            width="20"
          />
          <span id="email" class="contact" href={props.project.email}>
            {props.project.email}
          </span>
        </div>
        <button id="update" onClick={props.handleUpdate} disabled={disable}>
          Update Project
        </button>
      </div>
    </div>
  );
};

export default DisplayProject;
