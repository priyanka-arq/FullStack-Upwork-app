import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
import "./styles/styles.scss";

import Home from "./components/Home/Home";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import CreateProfile from "./components/profile/CreateProfile";
import CreateProject from "./components/project/CreateProject";
import Profile from "./components/profile/Profile";
import ShowProfile from "./components/profile/ShowProfile";
import ProfileManagement from "./components/profile/ProfileManagement";
import UpdateProfile from "./components/profile/UpdateProfile";
import ProjectForm from "./components/project/ProjectForm";
import UserProjects from "./components/project/UserProjects";
import DisplayProject from "./components/project/DisplayProject";
import UpdateProject from "./components/project/UpdateProject";
import Search from "./components/search/Search";
import Project from "./components/project/Project";
import ProjectManagement from "./components/project/ProjectManagement";
import Navigation from "./components/navigation/Navigation";

const queryClient = new QueryClient();
class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Navigation />
        </div>

        <div className="container mt-3">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profiles" component={Profile} />
            <Route exact path="/profile" component={CreateProfile} />
            <Route
              exact
              path="/profile/:profileId"
              component={(props) => <ShowProfile {...props} />}
            />
            <Route
              exact
              path="/profile/:profileId/update"
              component={UpdateProfile}
            />

            <Route
              exact
              path="/user/:userId"
              component={(props) => <ProfileManagement {...props} />}
            />
            <Route
              exact
              path="/user/:userId/update"
              component={UpdateProfile}
            />

            <Route exact path="/projects" component={Project} />
            <Route
              exact
              path="/project/:projectId"
              component={(props) => <ProjectManagement {...props} />}
            />
            <Route
              exact
              path="/projects/user/:userId"
              component={UserProjects}
            />
            <Route
              exact
              path="/project/:projectId/update"
              component={UpdateProject}
            />
            <Route exact path="/project" component={CreateProject} />
            <Route exact path="/search" component={Search} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
