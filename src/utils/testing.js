import "jest-styled-components";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

/**
 * Tests if a react component shallow renders without crashing
 * @param Component {Renderable React object}
 */
export function testComponentRender(Component) {
  shallow(Component);
}

/**
 * Tests if a react component deep renders without crashing
 * @param Component {Renderable React object}
 */
export function testComponentDeepRender(Component) {
  renderer.create(Component);
}

export function testCssPropery(Component, property, expectedValue) {
  const component = renderer.create(Component).toJSON();
  expect(component).toHaveStyleRule(property, expectedValue);
}
