import React, { Component } from "react";
import { connect } from "react-redux";
import * as projectActions from "../../redux/actions/projectActions";
import AuthService from "../../services/auth.service";
import ProjectForm from "./ProjectForm";
import { Redirect } from "react-router-dom";
import { newProject } from "../../utils/newProject";

class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: { ...this.props.project },
      currentUser: {},
      userReady: false,
      redirect: null,
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    this.setState({ currentUser: currentUser, userReady: true });
    console.log("currentUser", currentUser);
    if (!currentUser) {
      this.setState({ redirect: "/login" });
      console.log("redirect", this.state.redirect);
    }
  }

  handleSubmit = (project) => {
    this.props.saveProject(project).then(() => {
      this.props.history.push("/projects");
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    const { currentUser } = this.state;

    return (
      <div>
        {this.state.userReady ? (
          <ProjectForm
            project={this.props.project}
            onSubmit={this.handleSubmit}
          />
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  project: newProject,
});

const mapDispatchToProps = (dispatch) => ({
  saveProject: (project) => dispatch(projectActions.saveProject(project)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
