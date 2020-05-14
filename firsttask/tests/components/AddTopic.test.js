import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import AddTopic from "../../src/components/Topics/AddTopic";

describe("<AddTopic /> test cases", () => {
  test("renders", () => {
    const wrapper = shallow(<AddTopic />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
