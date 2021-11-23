import React, { useEffect } from "react";
import { CloudinaryContext, Transformation, Image } from "cloudinary-react";
import phoneImage from "../Images/phoneImage.png";
import emailImage from "../Images/emailImage1.png";
import gitImage from "../Images/gitImage.png";
import AuthService from "../../services/auth.service";

const DisplayProfile = (props) => {
  const [disable, setDisable] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState({});

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    setCurrentUser(user);
    if (user && user.id === props.profile.user) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [props.profile]);

  return (
    <div className="container">
      <div className="profileHeading">
        <h1>{props.profile.name}</h1>
        <h3>{props.profile.title}</h3>
      </div>

      <hr />
      <div className="aboutMe">
        <CloudinaryContext cloudName="didtkbpn7">
          <Image className="headshot" publicId={props.profile.imageUrl}>
            <Transformation
              crop="scale"
              width="300"
              height="200"
              dpr="auto"
              responsive_placeholder="blank"
            />
          </Image>
        </CloudinaryContext>
        <div>
          <img
            id="phoneImage"
            src={phoneImage}
            alt={props.profile.phone}
            height="20"
            width="20"
          />
          <p id="phone" className="contact">
            {props.profile.phone}
          </p>
        </div>

        <div>
          <img
            id="emailImage"
            src={emailImage}
            alt={props.profile.email}
            height="20"
            width="20"
          />
          <p id="email" className="contact" href={props.profile.email}>
            {props.profile.email}
          </p>
        </div>

        <div>
          <img
            id="gitImage"
            src={gitImage}
            alt={props.profile.github}
            height="20"
            width="20"
          />
          <a
            id="git"
            className="contact"
            target="_blank"
            href={props.profile.github}
          >
            {props.profile.github}
          </a>
        </div>
      </div>

      <div className="profileInfo">
        <h1>Hello,</h1>
        <h2>A bit more about me: </h2>
        <h5>{props.profile.aboutme}</h5>
        <div>
          {props.profile.skills && (
            <div className="skills">
              <h4> Professional Skills:</h4>
              {props.profile.skills.map((skill) => (
                <span>{skill}</span>
              ))}
            </div>
          )}
          <div className="resume">
            <p>
              <a href={props.profile.resume} target="_blank"></a>Resume
            </p>
          </div>

          <div className="linkedIn">
            <p>
              <a href={props.profile.linkedIn} target="_blank">
                LinkedIn
              </a>
            </p>
          </div>

          <div className="portfolio">
            <p>
              <a href={props.profile.portfolio} target="_blank">
                Portfolio
              </a>
            </p>
          </div>
        </div>
      </div>

      <div>
        <button
          className="button"
          onClick={props.handleUpdate}
          disabled={disable}
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default DisplayProfile;
