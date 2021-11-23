import React, { Component } from "react";
import { connect } from "react-redux";
import ProjectList from "./ProjectList";

export class Project extends Component {
  render() {
    return (
      <div>
        <ProjectList projects={this.props.projects} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

export default connect(mapStateToProps)(Project);
