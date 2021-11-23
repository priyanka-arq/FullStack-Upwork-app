import React, { Component } from "react";
import { CloudinaryContext, Transformation, Image } from "cloudinary-react";
import ProfileCard from "./ProfileCard";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as profileActions from "../../redux/actions/profileActions";
import Loading from "./Loading";
import styled from "styled-components";

const ProfileDisplay = styled.div`
  display: flex;
  flex-direction: row;
`;

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
      isLoading: null,
    };
  }

  componentDidMount() {
    const profiles = this.props.profiles;
    console.log("profiles", profiles);
    this.props.loadProfiles().catch((error) => {
      alert("Loading failed" + error);
    });

    if (profiles.length > 0) {
      const isLoading = false;
      this.setState({ isLoading: isLoading });
    }
  }

  render() {
    return (
      <div>
        {this.props.profiles &&
          this.props.profiles.map((profile) => (
            <ProfileCard
              key={profile._id}
              name={profile.name}
              title={profile.title}
              skills={
                profile.skills
                  ? profile.skills.map((skill) => (
                      <div>
                        <p>{skill}</p>
                      </div>
                    ))
                  : []
              }
              redirect={`profile/${profile._id}`}
            >
              <CloudinaryContext cloudName="didtkbpn7">
                <Image publicId={profile.imageUrl}>
                  <Transformation
                    crop="scale"
                    width="300"
                    height="300"
                    dpr="auto"
                    responsive_placeholder="blank"
                  />
                </Image>
              </CloudinaryContext>
            </ProfileCard>
          ))}
        {!this.props.profiles && <Loading show={this.state.isLoading} />}
      </div>
    );
  }
}

// Profile.prototype = {
//   profiles: PropTypes.array.isRequired,
// };

const mapStateToProps = (state) => {
  return {
    profiles: state.profiles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadProfiles: () => dispatch(profileActions.loadProfiles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
