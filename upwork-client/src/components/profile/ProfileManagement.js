import DisplayProfile from "./DisplayProfile";
import { connect } from "react-redux";
import * as profileActions from "../../redux/actions/profileActions";
import React, { Component } from "react";
import AuthService from "../../services/auth.service";
import ProfileForm from "./ProfileForm";
import profileImage from "../Images/profileImage.png";
import styled from "styled-components";

const ProfileContainer = styled.div`
  width: 50;
  height: 50;
  justify-content: center;
`;

export class ProfileManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      redirect: "",
      user_id: this.props.match.params.userId,
      userProfile: true,
    };
  }

  componentDidMount() {
    const profiles = this.props.profiles;

    if (profiles.length === 0) {
      this.props.loadProfiles().catch((error) => {
        alert("Failed to load Profile " + error);
      });
    }

    const profile = this.props.profile;
    this.setState({ profile: profile });
  }
  handleUpdate = (event) => {
    this.props.history.push(`/profile/${this.state.profile._id}/update`);
    // if (this.props.match.params.userId) {
    //   this.props.history.push(`/profile/${this.state.user_id}/update`);
    // } else {
    //   this.props.history.push(`/profile/${this.state.profile._id}/update`);
    // }
  };

  handleClick = () => {
    this.props.history.push(`/profile`);
  };

  render() {
    return (
      <div>
        {this.state.profile ? (
          <DisplayProfile
            profile={this.state.profile}
            handleUpdate={this.handleUpdate}
          />
        ) : (
          <div>
            <h2>Would you like to create a Profile? </h2>
            <button onClick={this.handleClick}>Create Profile</button>
            <ProfileContainer>
              <img id="phoneImage" src={profileImage} />
            </ProfileContainer>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  profiles: state.profiles,
  profile: state.profiles.find(
    (profile) => profile.user === ownProps.match.params.userId
  ),
});

const mapDispatchToProps = (dispatch) => ({
  loadProfiles: () => dispatch(profileActions.loadProfiles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileManagement);
