import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import { searchResult } from "./searchApi";

let query;

beforeEach(() => {
  moxios.install();
  moxios.stubRequest(
    `https://priyankapatel-oz-upwork.herokuapp.com/projects/search/${query}`,
    {
      status: 200,
      response: [{ project: "Fetched #1" }, { project: "Fetched #2" }],
    }
  );
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of projects", (done) => {
  searchResult("Fetched").then((response) => {
    expect(response).toEqual([
      { project: "Fetched #1" },
      { project: "Fetched #2" },
    ]);
  });
  done();
});
