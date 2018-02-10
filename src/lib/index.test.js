import * as React from "react";
import { mapPropsToStyles, Div, P } from "./index";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("mapPropsToStyles", () => {
  it("returns correct style properties from props object", () => {
    const props = {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "blue",
      psuedo: "&: hover { cursor: pointer }",
    };

    const expectedStyles = [
      "display: flex;",
      "justify-content: center;",
      "background-color: blue;",
      "psuedo: &: hover { cursor: pointer };",
    ];

    const styles = mapPropsToStyles(props);

    expect(styles).toEqual(expectedStyles);
  });
  it("Renders correct component and children with Style Tags", () => {
    const wrapper = mount(
      <Div display="flex" className="test_class">
        <P>Hi!</P>
      </Div>,
    );
    expect(wrapper.hasClass("test_class")).toBe(true);
    expect(wrapper.find(P).text()).toEqual("Hi!");
  });
});
