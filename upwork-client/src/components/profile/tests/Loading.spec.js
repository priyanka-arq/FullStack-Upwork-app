import React from "react";
import { shallow } from "enzyme";
import Loading from "../Loading";
import toJSON from "enzyme-to-json";
import CircularProgress from "@material-ui/core/CircularProgress";
let wrapped;

beforeEach(() => {
  wrapped = shallow(<Loading />);
});

afterEach(() => {
  //unmount component from dom structure, so that it won't interfer with other component
  wrapped.unmount();
});

test("Should CircularProgress correctly ", () => {
  expect(toJSON(wrapped)).toMatchSnapshot();
});

it("show profile card", () => {
  const wrapped = shallow(<Loading />);

  //find will return an array
  //will test how many time <CircularProgress /> component is render inside a Loading component
  expect(wrapped.find(CircularProgress).length).toEqual(3);
});
