import TagsInput from "react-tagsinput";
import AuthService from "../../services/auth.service";
import React, { Component } from "react";

class UpdateProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.project ? this.props.project.name : "",
      description: this.props.project ? this.props.project.description : "",
      skills: this.props.project ? this.props.project.skills : [],
      paymentType: this.props.project ? this.props.project.paymentType : "",
      estimatedBudget: this.props.project
        ? this.props.project.estimatedBudget
        : null,
      phone: this.props.project ? this.props.project.phone : null,
      email: this.props.project ? this.props.project.email : "",
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    this.setState({ currentUser: currentUser, userReady: true });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit({
      name: this.state.name,
      description: this.state.description,
      skills: this.state.skills,
      paymentType: this.state.paymentType,
      estimatedBudget: this.state.estimatedBudget,
      phone: this.state.phone,
      email: this.state.email,
    });
  };

  render() {
    return (
      <div>
        <div className="form-group">
          <form onSubmit={this.handleSubmit}>
            <h1>Update Project</h1>
            <h3>Name for your project</h3>
            <input
              className="form-control"
              onChange={(e) => this.setState({ name: e.target.value })}
              value={this.state.name}
              placeholder="name"
              required
            />

            <h3>Tell us more about your project</h3>
            <input
              className="form-control"
              onChange={(e) => this.setState({ description: e.target.value })}
              value={this.state.description}
              type="text"
              placeholder="description"
              required
            />

            <h3>Skills Required</h3>
            <input
              className="form-control"
              onChange={(e) => this.setState({ skills: e.target.value })}
              value={this.state.skills}
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
            <h3>Enter your phone number:</h3>
            <input
              className="form-control"
              onChange={(e) => this.setState({ phone: e.target.value })}
              value={this.state.phone}
              type="number"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="041-002-6781"
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
            <button className="button">Save Changes</button>
          </form>
        </div>
      </div>
    );
  }
}

export default UpdateProjectForm;
