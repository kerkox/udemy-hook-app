import React from "react";
import { shallow } from "enzyme";
import { HookApp } from "../HookApp";
describe("Pruebas de HookApp", () => {
  test("debe de renderizarse correctamente", () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
