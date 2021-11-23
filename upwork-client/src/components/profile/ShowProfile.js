import DisplayProfile from "./DisplayProfile";
import { connect } from "react-redux";
import * as profileActions from "../../redux/actions/profileActions";
import React, { Component, useEffect, useState } from "react";
import AuthService from "../../services/auth.service";

class ShowProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
    };
  }

  componentDidMount() {
    const profile = this.props.profile;
    this.setState({ profile });
  }

  // handleUpdate = (e) => {
  //   this.props.history.push(`/profile/${this.state.profile._id}/update`);
  // };
  render() {
    return (
      <div>
        <DisplayProfile
          profile={this.props.profile}
          // handleUpdate={this.handleUpdate}
        />{" "}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  profiles: state.profiles,
  profile: state.profiles.find(
    (profile) => profile._id === ownProps.match.params.profileId
  ),
});

export default connect(mapStateToProps, null)(ShowProfile);
