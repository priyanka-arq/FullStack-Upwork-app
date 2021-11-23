import React, { Component } from "react";
import AuthService from "../../services/auth.service";
import ProfileForm from "./ProfileForm";
import "react-tagsinput/react-tagsinput.css";
import { newProfile } from "../../utils/newProfile";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as profileActions from "../../redux/actions/profileActions";

export class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: { ...this.props.profile },
      userReady: false,
      tags: [],
      currentUser: {},
      redirect: null,
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    this.props.profiles.map((profile) => {
      if (currentUser && profile.user === currentUser.id) {
        this.props.history.push(`/user/${currentUser.id}`);
      }
    });

    if (!currentUser) {
      this.props.history.push("/login");
    }

    this.setState({ currentUser: currentUser, userReady: true });
  }

  onSubmit = (profile) => {
    this.props.createProfile(profile);
    this.props.history.push("/profiles");
  };

  render() {
    return (
      <div>
        {this.state.userReady ? (
          <ProfileForm profile={this.props.profile} onSubmit={this.onSubmit} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profiles: state.profiles,
    profile: newProfile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProfile: (profile) => dispatch(profileActions.createProfile(profile)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile);
