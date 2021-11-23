import React from "react";
import { shallow } from "enzyme";
import ProfileForm from "../ProfileForm";
import profiles from "../../../fixtures/profiles";
import toJSON from "enzyme-to-json";

let wrapped, onSubmitSpy, currentUser, props;

beforeEach(() => {
  // currentUser = { id: 1 };
  onSubmitSpy = jest.fn();

  wrapped = shallow(
    <ProfileForm
      // currentUser={currentUser}
      profile={profiles[0]}
      onSubmit={onSubmitSpy}
    />
  );
});

afterEach(() => {
  wrapped.unmount();
});

test("should render Profile form correctly", () => {
  expect(toJSON(wrapped)).toMatchSnapshot();
});

describe("the name input ", () => {
  it("should set name on input change", () => {
    wrapped.find("#name-input").simulate("change", {
      target: { value: "Priyanka" },
    });
    expect(wrapped.find("#name-input").prop("value")).toEqual("Priyanka");
    wrapped.update();
  });

  it("should set title on input change", () => {
    const value = "Junior Developer";
    wrapped.find("input").at(2).simulate("change", {
      target: { value },
    });
    expect(wrapped.state("title")).toEqual(value);
  });

  test("should call onSubmit prop for valid form submission", () => {
    wrapped.find("form").simulate("submit", {
      preventDefault: () => {},
    });
    expect(onSubmitSpy).toHaveBeenCalledTimes(1);
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
      imageUrl: profiles[0].imageUrl,
      name: profiles[0].name,
      skills: profiles[0].skills,
      title: profiles[0].title,
      phone: profiles[0].phone,
      email: profiles[0].email,
      aboutme: profiles[0].aboutme,
      postcode: profiles[0].postcode,
      resume: profiles[0].resume,
      portfolio: profiles[0].portfolio,
      github: profiles[0].github,
      previewSource: profiles[0].previewSource,
      // user: currentUser.id,
    });
  });
});
