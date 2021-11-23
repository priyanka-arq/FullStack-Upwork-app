import React, { Component } from "react";
import styled from "styled-components";
//import { Container } from "@material-ui/core";
// import searchbar from "../Images/searchbar.png";
import { GoSearch } from "react-icons/go";
import SearchList from "./SearchList";
import { connect } from "react-redux";
import * as searchActions from "../../redux/actions/searchActions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const SearchBar = styled.div`
  border-radius: "0.5em";
  margin-bottom: 2em;
`;

const SearchButton = styled.div`
  /* width: 300;
  padding: 4; */
`;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      searchResults: [],
      error: "",
      isLoading: 0,
      redirect: null,
      toggleSearch: false,
    };
  }

  componentDidMount() {
    const response = this.props.response;
    this.setState({ searchResults: response });
  }

  submitSearch = (event) => {
    event.preventDefault();
    if (this.state.query !== "") {
      this.setState({ searchResults: [], isLoading: 1 });
      this.props.loadResults(this.state.query).catch((error) => {
        console.log(error);
        this.setState({ error: error, isLoading: 0 });
      });
    }
  };
  render() {
    return (
      <Container>
        <SearchButton>
          <button
            onClick={() => {
              this.setState({ toggleSearch: !this.state.toggleSearch });
            }}
          >
            <div>
              <GoSearch className="inline-block align-text-top" />
            </div>
          </button>
        </SearchButton>

        {this.state.toggleSearch && (
          <SearchBar>
            <form>
              <input
                onChange={(event) =>
                  this.setState({ query: event.target.value })
                }
                placeholder="Example: Developer"
              />
              <button onClik={this.submitSearch}>Search</button>
            </form>
          </SearchBar>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    response: state.SearchResult,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadResults: (query) => dispatch(searchActions.loadResults(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);

// <img id="emailImage" src={searchbar} alt="Search" height="20" width="20" />;
