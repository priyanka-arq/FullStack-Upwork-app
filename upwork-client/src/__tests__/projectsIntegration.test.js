import React from "react";
import { shallow } from "enzyme";
import Root from "../Root";
import Project from "../components/project/Project";
import App from "../App";
import moxios from "moxios";
import projects from "../fixtures/projects";
import toJSON from "enzyme-to-json";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("https://priyankapatel-oz-upwork.herokuapp.com/projects", {
    status: 200,
    response: projects,
  });
});

afterEach(() => {
  moxios.uninstall();
});

test("can fetch a list of projects and diaplay them", () => {
  const wrapped = shallow(
    <Root>
      <Project projects={projects} />
    </Root>
  );

  expect(toJSON(wrapped)).toMatchSnapshot();

  moxios.wait(() => {
    wrapped.update();
    done();
  });
});

// test("should render ProjectList", () => {
//   const wrapped = shallow(
//     <Root>
//       <Project projects={projects} />
//     </Root>
//   );
//   expect(wrapped.find("ProjectList").length).toEqual(1);
// });
