import React, { Component } from "react";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import AuthService from "../../services/auth.service";

class ProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: this.props.project ? this.props.project.skills : [],
      name: this.props.project ? this.props.project.name : "",
      phone: this.props.project ? this.props.project.phone : "",
      email: this.props.project ? this.props.project.email : "",
      description: this.props.project ? this.props.project.description : "",
      paymentType: this.props.project ? this.props.project.paymentType : "",
      estimatedBudget: this.props.project
        ? this.props.project.estimatedBudget
        : 0,
      redirect: null,
      userReady: false,
      currentUser: {},
      tags: [],
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) this.setState({ redirect: "/login" });
    this.setState({ currentUser: currentUser, userReady: true });
  }

  handleSkills = (tags) => {
    this.setState({ skills: tags });
  };

  onSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit({
      skills: this.state.skills,
      name: this.state.name,
      description: this.state.description,
      paymentType: this.state.paymentType,
      phone: this.state.phone,
      email: this.state.email,
      estimatedBudget: this.state.estimatedBudget,
      user: this.state.currentUser ? this.state.currentUser.id : undefined,
    });
  };

  render() {
    return (
      <div>
        {this.state.userReady ? (
          <div className="form-group">
            <form onSubmit={this.onSubmit}>
              <h1>New Project</h1>
              <h3>Name for your project</h3>
              <input
                id="name-input"
                className="form-control"
                onChange={(e) => this.setState({ name: e.target.value })}
                value={this.state.name}
                placeholder="name"
                required
              />

              <h3>Tell us more about your project</h3>
              <textarea
                className="form-control"
                onChange={(e) => this.setState({ description: e.target.value })}
                value={this.state.description}
                type="text"
                placeholder="project description"
                required
              />

              <h3>Skills Required</h3>
              <TagsInput
                className="form-control"
                onChange={this.handleSkills}
                value={this.state.tags}
                type="text"
                placeholder="Skills "
                required
              />

              <h3>Payment Type</h3>
              <select
                className="form-control"
                onChange={(e) => this.setState({ paymentType: e.target.value })}
                value={this.state.paymentType}
                type="text"
                placeholder="payment"
                required
              >
                <option value="">Select paymentType</option>
                <option value="Fixed-Price">Fixed Price</option>
                <option value="Hourly-Rate">Hourly Rate</option>
              </select>

              <h3>Estimated Budget</h3>
              <input
                className="form-control"
                onChange={(e) =>
                  this.setState({ estimatedBudget: e.target.value })
                }
                value={this.state.estimatedBudget}
                type="number"
                placeholder="$"
                required
              />

              <h3>Phone Number</h3>
              <input
                className="form-control"
                onChange={(e) => this.setState({ phone: e.target.value })}
                value={this.state.phone}
                type="number"
                placeholder="Phone"
                required
              />

              <h3>Email</h3>
              <input
                className="form-control"
                onChange={(e) => this.setState({ email: e.target.value })}
                value={this.state.email}
                type="email"
                placeholder="email"
                required
              />

              <button className="button" onClick={this._handleCreate}>
                Post Project
              </button>
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}
export default ProjectForm;
