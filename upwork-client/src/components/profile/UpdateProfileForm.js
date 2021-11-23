import TagsInput from "react-tagsinput";
import AuthService from "../../services/auth.service";
import React, { Component } from "react";

class UpdateProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: this.props.profile ? this.props.profile.imageUrl : "",
      name: this.props.profile ? this.props.profile.name : "",
      skills: this.props.profile ? this.props.profile.skills : [],
      title: this.props.profile ? this.props.profile.title : "",
      phone: this.props.profile ? this.props.profile.phone : "",
      email: this.props.profile ? this.props.profile.email : "",
      aboutme: this.props.profile ? this.props.profile.aboutme : "",
      suburb: this.props.profile ? this.props.profile.suburb : "",
      postcode: this.props.profile ? this.props.profile.postcode : "",
      resume: this.props.profile ? this.props.profile.resume : "",
      portfolio: this.props.profile ? this.props.profile.portfolio : "",
      linkedIn: this.props.profile ? this.props.profile.linkedIn : "",
      github: this.props.profile ? this.props.profile.github : "",
      redirect: this.props.profile ? this.props.profile.redirect : null,
      previewSource: "",
      currentUser: {},
      userReady: false,
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    this.setState({ currentUser: currentUser, userReady: true });
  }

  handleImageUrl = (event) => {
    this.state.imageUrl = event.target.value;
    this.setState({ imageUrl: event.target.files[0] });
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.setState({ previewSource: reader.result });
    };
    this.setState({ imageUrl: event.target.value });
    //previewFile(this.state.imageUrl);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("USER ID", this.state.currentUser.id);

    this.props.onSubmit({
      imageUrl: this.state.imageUrl,
      name: this.state.name,
      skills: this.state.skills,
      title: this.state.title,
      phone: this.state.phone,
      email: this.state.email,
      aboutme: this.state.aboutme,
      postcode: this.state.postcode,
      resume: this.state.resume,
      portfolio: this.state.portfolio,
      github: this.state.github,
      redirect: this.state.redirect,
      previewSource: this.state.previewSource,
      user: this.state.currentUser.id,
    });
  };

  render() {
    const { currentUser } = this.state;
    return (
      <div className="form-group">
        <form onSubmit={this.handleSubmit}>
          <h1>Profile</h1>
          <h3>Name</h3>
          <input
            className="form-control"
            onChange={(e) => this.setState({ name: e.target.value })}
            value={this.state.name}
            placeholder="full name"
            required
          />

          <h3>Profile Picture</h3>
          <input
            className="form-control"
            onChange={this.handleImageUrl}
            type="file"
            name="image"
            alt="imageUrl"
          />

          <h3>Title</h3>
          <input
            className="form-control"
            onChange={(e) => this.setState({ title: e.target.value })}
            value={this.state.title}
            type="text"
            placeholder="title"
            required
          />

          <h3>About me</h3>
          <input
            className="form-control"
            onChange={(e) => this.setState({ aboutme: e.target.value })}
            value={this.state.aboutme}
            type="text"
            placeholder="about me"
            required
          />

          <h3>Skills</h3>
          <input
            className="form-control"
            onChange={(e) => this.setState({ skills: e.target.value })}
            value={this.state.skills}
            type="text"
            placeholder="Skills "
            required
          />
          <h3>Phone number:</h3>
          <input
            className="form-control"
            onChange={(e) => this.setState({ phone: e.target.value })}
            value={this.state.phone}
            type="text"
            placeholder="Phone Number "
            required
          />
          <h3>Email</h3>
          <input
            className="form-control"
            onChange={(e) => this.setState({ email: e.target.value })}
            value={this.state.email}
            type="text"
            placeholder="email "
            required
          />

          <h3>Suburb</h3>
          <input
            className="form-control"
            onChange={(e) => this.setState({ suburb: e.target.value })}
            value={this.state.suburb}
            type="text"
            placeholder="Suburb"
          />

          <h3>Postcode</h3>
          <input
            className="form-control"
            onChange={(e) => this.setState({ postcode: e.target.value })}
            value={this.state.postcode}
            type="text"
            placeholder="Postcode"
          />

          <h3>Upload Your Resume</h3>
          <input
            className="form-control"
            onChange={(e) => this.setState({ resume: e.target.value })}
            value={this.state.resume}
            type="file"
            name="resume"
            alt="resume"
            placeholder="Resume"
          />

          <h3>Connect with LinkedIn</h3>
          <input
            className="form-control"
            onChange={(e) => this.setState({ linkedIn: e.target.value })}
            value={this.state.linkedIn}
            type="text"
            placeholder="LinkedIn"
          />

          <h3>Link to Portfolio</h3>
          <input
            className="form-control"
            onChange={(e) => this.setState({ portfolio: e.target.value })}
            value={this.state.portfolio}
            type="text"
            placeholder="Portfolio"
          />

          <h3>Github </h3>
          <input
            className="form-control"
            onChange={(e) => this.setState({ imageUrl: e.target.value })}
            value={this.state.github}
            type="text"
            placeholder="Portfolio"
          />
          <button className="button">Update Profile</button>
        </form>
        {this.state.previewSource && (
          <img
            src={this.state.previewSource}
            alt="chosen"
            style={{ height: "300px" }}
          />
        )}
      </div>
    );
  }
}

export default UpdateProfileForm;
