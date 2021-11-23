import { connect } from "react-redux";
import * as profileActions from "../../redux/actions/profileActions";
import React, { Component } from "react";
import UpdateProfileForm from "./UpdateProfileForm";
import ProfileForm from "./ProfileForm";

class UpdateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      user_id: props.match.params.profileId,
    };
  }

  componentDidMount() {
    const profile = this.props.profile;
    this.setState({ profile });
  }

  handleSubmit = (profile) => {
    const data = {
      previewSource: { previewSource: profile.previewSource },
      profile: [profile],
    };

    console.log("Updated Profile", data);
    this.props.updateProfile(profile, this.state.user_id).then(() => {
      this.props.history.push(`/profile/${this.state.user_id}`);
    });
  };

  render() {
    return (
      <div>
        <UpdateProfileForm
          profile={this.props.profile}
          onSubmit={this.handleSubmit}
        />{" "}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    profiles: state.profiles,
    profile: state.profiles.find(
      (profile) =>
        profile._id ===
        (ownProps.match.params.userId || ownProps.match.params.profileId)
    ),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateProfile: (profile, user_id) =>
      dispatch(profileActions.updateProfile(profile, user_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
