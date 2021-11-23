import React from "react";
import { shallow } from "enzyme";
import { UserProjects } from "../UserProjects";
import projects from "../../../fixtures/projects";

let wrapped, handleClick, history, loadProjects;

beforeEach(() => {
  handleClick = jest.fn();
  loadProjects = jest.fn();
  history = { push: jest.fn() };
  wrapped = shallow(
    <UserProjects
      match={{ params: { projectId: 1 } }}
      projects={projects}
      history={history}
      onClick={handleClick}
      loadProjects={loadProjects}
    />
  );
});

afterEach(() => {
  wrapped.unmount();
});

test("Should render UserProjects correctly ", () => {
  expect(wrapped).toMatchSnapshot();
});

it("Should render button correctly ", () => {
  expect(wrapped.find("button").length).toBe(1);
});

test("Should handle on click event on button", () => {
  wrapped.find(".button").simulate("click");
  expect(history.push).toHaveBeenLastCalledWith("/project");
});
