import React, { useEffect, useState } from "react";
import phoneImage from "../Images/phoneImage.png";
import emailImage from "../Images/emailImage1.png";

const UserProjectsDetails = (props) => {
  console.log("props.projects", props.projects);
  return (
    <div>
      {props.projects.length > 0
        ? props.projects.map((project) => (
            <div>
              <hi> {project.name} </hi>

              <div
                class="projectShow"
                style={{ marginLeft: "20rem", padding: "auto" }}
              >
                {project.skills && (
                  <div div class="skills">
                    <h4> Professional Skills Required:</h4>
                    {project.skills.map((skill) => (
                      <span>{skill}</span>
                    ))}
                  </div>
                )}
                <h4> Job Description:</h4>
                <p> {project.description}</p>
                <h5>
                  {" "}
                  PaymentType: <span>{project.paymentType}</span>{" "}
                </h5>{" "}
                <br />
                <h5>
                  {" "}
                  EstimatedBudget $: <span>{project.estimatedBudget}</span>{" "}
                </h5>{" "}
                <br />
                <h5>
                  {" "}
                  Date posted : <span>{project.datePosted}</span>{" "}
                </h5>{" "}
                <br />
                <div>
                  <img
                    id="phoneImage"
                    src={phoneImage}
                    alt={project.phone}
                    height="20"
                    width="20"
                  />
                  <li id="phone" class="contact">
                    {project.phone}
                  </li>
                </div>
                <div>
                  <img
                    id="emailImage"
                    src={emailImage}
                    alt={project.projectemail}
                    height="20"
                    width="20"
                  />
                  <li id="email" class="contact" href={project.email}>
                    {project.email}
                  </li>
                </div>
              </div>
              <hr></hr>
            </div>
          ))
        : null}
    </div>
  );
};

export default UserProjectsDetails;
