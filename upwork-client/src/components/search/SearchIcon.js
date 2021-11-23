import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "@material-ui/core";
import searchbar from "../Images/searchbar.png";
import { FaSearch } from "react-icons/fa";
import SearchList from "./SearchList";

const SERVER_URL = process.env.REACT_APP_SERVER_ENDPOINT + "/projects/search/";
const SearchBar = styled.div`
  justify-content: center;
  width: 300;
  padding: 4;
  border-radius: "0.5em";
`;

const SearchButton = styled.div`
  text-decoration: none;
  width: 300;
  padding: 4;
`;

class Search extends Component {
  constructor() {
    super();
    this.state = {
      toggleSearch: false,
    };
  }

  render() {
    return (
      <SearchButton>
        <button
          onClick={() => {
            this.setState({ toggleSearch: !this.state.toggleSearch });
          }}
        >
          <div>
            <FaSearch className="inline-block align-text-top" />
          </div>
        </button>
      </SearchButton>
    );
  }
}

export default Search;
