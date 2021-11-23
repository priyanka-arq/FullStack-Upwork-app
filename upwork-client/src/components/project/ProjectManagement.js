import { connect } from "react-redux";
import DisplayProject from "./DisplayProject";
import * as projectActions from "../../redux/actions/projectActions";

import React, { Component } from "react";

class ProjectManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {},
      projectId: this.props.match.params.projectId,
    };
  }

  componentDidMount() {
    const projects = this.props.projects;

    if (projects.length === 0) {
      this.props.loadProjects().catch((error) => {
        alert("Failed to load Profile " + error);
      });
    }
    const project = projects.find(
      (project) => project._id === this.props.match.params.projectId
    );

    this.setState({ project: project });
  }
  handleUpdate = () => {
    this.props.history.push(`/project/${this.state.projectId}/update`);
  };
  render() {
    return (
      <div>
        <DisplayProject
          project={this.state.project}
          handleUpdate={this.handleUpdate}
        />
        ;
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadProjects: () => dispatch(projectActions.loadProjects()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectManagement);
