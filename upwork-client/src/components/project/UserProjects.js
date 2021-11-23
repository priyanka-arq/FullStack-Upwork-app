import React, { Component } from "react";
import * as projectActions from "../../redux/actions/projectActions";
import { connect } from "react-redux";
import UserProjectsDetails from "./UserProjectsDetails";
import jobImage from "../Images/jobImage.png";
import styled from "styled-components";

const ProjectContainer = styled.div`
  width: 100;
  height: 100;
  justify-content: center;
`;

export class UserProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      redirect: "",
      projectId: props.match.params.projectId,
    };
  }
  componentDidMount() {
    const userProjects = this.props.projects;

    if (userProjects.length === 0) {
      this.props.loadProjects().catch((error) => {
        alert("Failed to load Profile " + error);
      });
    }

    const projects = userProjects.filter(
      (project) => project.user === this.props.match.params.userId
    );
    this.setState({ projects: projects });
    console.log();
  }
  handleClick = () => {
    this.props.history.push(`/project`);
  };
  render() {
    return (
      <div>
        {this.state.project ? (
          <UserProjectsDetails
            projects={this.state.projects}
            handleUpdate={this.handleUpdate}
          />
        ) : (
          <div>
            <h2>Post your job here? </h2>
            <button className="button" onClick={this.handleClick}>
              Post your job
            </button>
            <ProjectContainer>
              <img id="phoneImage" src={jobImage} />
            </ProjectContainer>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  projects: state.projects,
});

const mapDispatchToProps = (dispatch) => ({
  loadProjects: () => dispatch(projectActions.loadProjects()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProjects);
