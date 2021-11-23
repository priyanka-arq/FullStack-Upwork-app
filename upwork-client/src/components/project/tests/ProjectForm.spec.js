import React from "react";
import ProjectForm from "../../project/ProjectForm";
import { shallow } from "enzyme";
import projects from "../../../fixtures/projects";

let wrapped, onSubmitSpy, userReady, currentUser;

beforeEach(() => {
  onSubmitSpy = jest.fn();
  currentUser = { id: 1 };
  userReady = true;
  wrapped = shallow(
    //testing connected version of Profile by wrapping it with <Root />

    <ProjectForm
      currentUser={currentUser}
      userReady={userReady}
      onSubmit={onSubmitSpy}
      project={projects[0]}
    />
  );
});

afterEach(() => {
  wrapped.unmount();
});

test("Should render project form correctly ", () => {
  expect(wrapped).toMatchSnapshot();
});

describe("render profileForm value", () => {
  it("should set title on input change", () => {
    const value = "portfoio";
    wrapped.find("input").at(0).simulate("change", {
      target: { value },
    });

    expect(wrapped.state("name")).toEqual("portfoio");
  });

  test("should call onSubmit prop for valid form submission", () => {
    wrapped.find("form").simulate("submit", {
      preventDefault: () => {},
    });
    expect(onSubmitSpy).toHaveBeenCalledTimes(1);
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
      skills: projects[0].skills,
      name: projects[0].name,
      description: projects[0].description,
      paymentType: projects[0].paymentType,
      phone: projects[0].phone,
      email: projects[0].email,
      estimatedBudget: projects[0].estimatedBudget,
      // user: currentUser.id,
    });
  });
});
