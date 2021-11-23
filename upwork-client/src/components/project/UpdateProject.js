import React from "react";
import { connect } from "react-redux";
import UpdateProjectForm from "./UpdateProjectForm";
import * as projectActions from "../../redux/actions/projectActions";

function UpdateProject(props) {
  const projectId = props.match.params.projectId;

  const handleSubmit = (project) => {
    props.updateProject(project, projectId).then(() => {
      props.history.push(`/projects/`);
    });
  };
  return (
    <div>
      <UpdateProjectForm project={props.project} onSubmit={handleSubmit} />{" "}
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    project: state.projects.find(
      (project) => project._id === props.match.params.projectId
    ),
    projects: state.projects,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateProject: (project, projectId) =>
      dispatch(projectActions.updateProject(project, projectId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProject);
