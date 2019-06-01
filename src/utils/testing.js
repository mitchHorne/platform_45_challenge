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
 * @param {Renderable React object} Component
 * @param {React object}            ChildComponent
 */
export function clickChildComponent(Component, ChildComponent) {
  shallow(Component)
    .find(ChildComponent)
    .props()
    .onClick();
}

/**
 * Creates and returns an Enzyme wrapper object
 * This is useful when you need an instantiated wrapper object to test state transitions,
 * class functions, lifecycle hooks or the like
 * @param {Renderable React object} Component
 * @returns {Enzyme wrapper object}
 */
export function generateEnzymeWrapper(Component) {
  return shallow(Component);
}

/**
 * Retrieves state proprty and returns it from an Enzyme wrapper
 * @param {Enzyme wrapper object} wrapper
 * @param {String}                property
 * @returns {any}
 */
export function getStateProperty(wrapper, property) {
  return wrapper.state()[property];
}

/**
 * Runs given component class function
 * @param {Renderable React object} Component
 * @param {String}                  func
 * @param {Array}                   params
 */
export function runComponentClassFunction(wrapper, func, params = []) {
  wrapper.instance()[func](...params);
}

/**
 * Tests if a react component deep renders without crashing
 * @param {Renderable React object} Component
 */
export function testComponentDeepRender(Component) {
  renderer.create(Component);
}

/**
 * Tests if a react component shallow renders without crashing
 * @param {Renderable React object} Component
 */
export function testComponentRender(Component) {
  shallow(Component);
}

/**
 * Tests if a react component has a specific css property
 * @param {Renderable React object} Component
 * @param {String}                  property
 * @param {String}                  expectedValue
 */
export function testCssPropery(Component, property, expectedValue) {
  const component = renderer.create(Component).toJSON();
  expect(component).toHaveStyleRule(property, expectedValue);
}

/**
 * Tests if a react component has a specific css property
 * @param {Renderable React object} Component
 * @param {Object}                  props
 * @param {Object}                  newProps
 */
export function updateProps(Component, newProps) {
  const wrapper = shallow(Component);
  wrapper.setProps(newProps);
}
