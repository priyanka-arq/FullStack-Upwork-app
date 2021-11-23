import React from "react";
import { Project } from "../Project";
import { shallow } from "enzyme";
import projects from "../../../fixtures/projects";
let wrapped;

beforeEach(() => {
  wrapped = shallow(<Project projects={projects} />);
});

afterEach(() => {
  wrapped.unmount();
});

test("Should create snapshot", () => {
  expect(wrapped).toMatchSnapshot();
});

test("Should render ProjectList component", () => {
  expect(wrapped.find("ProjectList").length).toEqual(1);
});
