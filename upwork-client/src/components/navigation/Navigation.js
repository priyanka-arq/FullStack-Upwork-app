import { Link, NavLink } from "react-router-dom";
import AuthService from "../../services/auth.service";
import React, { Component } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import styled from "styled-components";
import Search from "../search/Search";

const Navbar = styled.div`
  background-color: #323232;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 85px;
  & > * {
    text-decoration: none;
    justify-content: center;
    font-size: 1.25em;
    padding: 1.5rem 1.5rem 1.5rem 1rem;
    color: #fff;
    &:hover {
      background: #fff;
    }
  }
`;

const queryClient = new QueryClient();
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <QueryClientProvider client={queryClient}>
        <Navbar>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            HOME
          </Link>

          <Link to={"/projects"}>BROWSE JOBS</Link>

          {currentUser && currentUser.userType === "client" && (
            <Link to={"/project"}>POST A PROJECT</Link>
          )}

          <Link to={"/profiles"}>DEVELOPER</Link>

          {currentUser && currentUser.userType === "developer" && (
            <Link to={"/profile"}>CREATE A PROFILE</Link>
          )}

          {currentUser && currentUser.userType === "developer" && (
            <Link to={`/user/${currentUser.id}`}>MY PROFILE</Link>
          )}

          {currentUser && currentUser.userType === "client" && (
            <Link to={`/projects/user/${currentUser.id}`}>MY JOB POST</Link>
          )}

          {currentUser ? (
            <a href="/login" onClick={this.logOut}>
              LOGOUT
            </a>
          ) : (
            <div>
              <Link
                to={"/login"}
                style={{ textDecoration: "none", padding: "0 1.5rem 0 1rem " }}
              >
                LOGIN
              </Link>
              <Link to={"/register"} style={{ textDecoration: "none" }}>
                SIGN UP
              </Link>
            </div>
          )}
        </Navbar>
        <div>
          {" "}
          <Search />
        </div>
      </QueryClientProvider>
    );
  }
}

export default Navigation;
