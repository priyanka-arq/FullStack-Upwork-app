import { useState } from "react";
import { connect } from "react-redux";
import Home from "../Home/Home";

const SearchList = (props) => {
  console.log(props.projectList);
  return (
    <div class="searchResult">
      {props.projectList.length >= 0 &&
        props.projectList.map((project) => (
          <div class="searchResult">
            <h1
              class="ProjectHeading"
              style={{ fontSize: "2rem", textTransform: "uppercase" }}
            >
              {project.name}
            </h1>
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
                Contact me for more details: <span>{project.email}</span>{" "}
              </h5>{" "}
              <br />
              <h5>
                {" "}
                Date posted : <span>{project.datePosted}</span>{" "}
              </h5>{" "}
              <br />
            </div>
            <hr />
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    response: state.SearchResult,
  };
};

export default connect(mapStateToProps)(SearchList);
