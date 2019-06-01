import "jest-styled-components";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

/**
 * Clicks on the provided component
 * @param Component {Renderable React object}
 */
// export function clickComponent(Component) {
//   shallow(Component);
// }

/**
 * Clicks on a specified child component
 * @param Component       {Renderable React object}
 * @param ChildComponent  {React object}
 */
export function clickChildComponent(Component, ChildComponent) {
  shallow(Component)
    .find(ChildComponent)
    .props()
    .onClick();
}

/**
 * Tests if a react component deep renders without crashing
 * @param Component {Renderable React object}
 */
export function testComponentDeepRender(Component) {
  renderer.create(Component);
}

/**
 * Tests if a react component shallow renders without crashing
 * @param Component {Renderable React object}
 */
export function testComponentRender(Component) {
  shallow(Component);
}

/**
 * Tests if a react component has a specific css property
 * @param Component     {Renderable React object}
 * @param property      {String}
 * @param expectedValue {String}
 */
export function testCssPropery(Component, property, expectedValue) {
  const component = renderer.create(Component).toJSON();
  expect(component).toHaveStyleRule(property, expectedValue);
}

/**
 * Tests if a react component has a specific css property
 * @param Component {Renderable React object}
 * @param props     {Object}
 * @param newProps  {Object}
 */
export function updateProps(Component, newProps) {
  const wrapper = shallow(Component);
  wrapper.setProps(newProps);
}
