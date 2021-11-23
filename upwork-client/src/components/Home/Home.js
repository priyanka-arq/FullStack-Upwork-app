import React, { Component } from "react"; // destructuring
import { connect } from "react-redux";
import * as profileActions from "../../redux/actions/profileActions";
import * as projectActions from "../../redux/actions/projectActions";
import styled from "styled-components";

const Container = styled.div`
  visibility: visible;
`;
const AdBlock = styled.div`
  display: flex;
  & > * {
    margin-right: 10px;
    background-color: #cddeef;
    flex-direction: row;
    border: 1px solid black;
    border-radius: 20px;
    text-align: center;
  }
`;

const Heading = styled.div`
  color: #1b4f72;
  size: 1.2em;
`;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      redirect: null,
      searchResult: [],
    };
  }
  componentDidMount() {
    this.setState({ searchResult: this.props.searchResult });
    this.props.loadProfiles();
    this.props.loadProjects();
  }

  render() {
    return (
      <Container>
        <Heading>
          <h1>Hire the best Software Developer for any job, online.</h1>
        </Heading>
        <p>
          How can ozWorkIT help your business? The possibilities are endless. We
          have expert freelancers who work in every technical, professional, and
          creative field imaginable.
        </p>
        <br></br>
        <h3>Choose from endless possibilities</h3>
        <p>
          Get anything done, exactly how you want it. Turn that spark of an idea
          into reality.
        </p>

        <AdBlock>
          <div>
            <h4>Any sized project</h4>
            <p>
              Get any job done. From small one-off tasks to large, multi-stage
              projects.
            </p>
          </div>

          <div>
            <h4>Flexible payment terms</h4>
            <p>
              Pay your freelancers a fixed price or by the hour. All secured by
              the Milestone Payments system..
            </p>
          </div>

          <div>
            <h4>Diverse talent</h4>
            <p>
              Choose from expert freelancers in over 1800 skill sets, from all
              around the globe.
            </p>
          </div>
        </AdBlock>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchResult: state.searchResult,
    profiles: state.profiles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadProfiles: () => dispatch(profileActions.loadProfiles()),
  loadProjects: () => dispatch(projectActions.loadProjects()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
