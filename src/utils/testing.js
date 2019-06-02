import "jest-styled-components";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

/**
 * Blurs a specified child component
 * @param {Renderable React object || Enzyme wrapper object} Component
 * @param {React object} ChildComponent
 */
export function blurChildComponent(Component, ChildComponent) {
  // Checks if the passed component is already an enzyme wrapper
  if (Component.find)
    return Component.find(ChildComponent)
      .props()
      .onBlur();

  shallow(Component)
    .find(ChildComponent)
    .props()
    .onBlur();
}

/**
 * Fires onChange on a specified child component
 * @param {Renderable React object || Enzyme wrapper object} Component
 * @param {React object} ChildComponent
 * @param {Event object} params
 */
export function changeChildComponent(Component, ChildComponent, params) {
  // Checks if the passed component is already an enzyme wrapper
  if (Component.find)
    return Component.find(ChildComponent)
      .props()
      .onChange(params);

  shallow(Component)
    .find(ChildComponent)
    .props()
    .onChange(params);
}

/**
 * Clicks on a specified child component
 * @param {Renderable React object || Enzyme wrapper object} Component
 * @param {React object} ChildComponent
 */
export function clickChildComponent(Component, ChildComponent) {
  // Checks if the passed component is already an enzyme wrapper
  if (Component.find)
    return Component.find(ChildComponent)
      .props()
      .onClick();

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
 * @param {String} property
 * @returns {any}
 */
export function getStateProperty(wrapper, property) {
  return wrapper.state()[property];
}

/**
 * Mocks given component class function
 * @param {Enzyme wrapper object} wrapper
 * @param {String} func
 * @param {Array} params
 */
export function mockComponentClassFunction(wrapper, func, mock) {
  wrapper.instance()[func] = mock;
}

/**
 * Runs given component class function
 * @param {Renderable React object || Enzyme wrapper object} Component
 * @param {String} func
 * @param {Array} params
 */
export function runComponentClassFunction(Component, func, params = []) {
  if (Component.instance) return Component.instance()[func](...params);

  return shallow(Component)
    .instance()
    [func](...params);
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
 * @param {String}  property
 * @param {String}  expectedValue
 */
export function testCssPropery(Component, property, expectedValue) {
  const component = renderer.create(Component).toJSON();
  expect(component).toHaveStyleRule(property, expectedValue);
}

/**
 * Tests if a react component has a specific css property at a given media query breakpoint
 * @param {Renderable React object} Component
 * @param {String}  property
 * @param {String}  expectedValue
 * @param {String}  media
 */
export function testCssMediaPropery(Component, property, expectedValue, media) {
  const component = renderer.create(Component).toJSON();
  expect(component).toHaveStyleRule(property, expectedValue, { media });
}

/**
 * Tests if a react component has a specific css property with a given CSS modifier
 * @param {Renderable React object} Component
 * @param {String} property
 * @param {String} expectedValue
 * @param {String} modifier
 */
export function testCssModifierPropery(
  Component,
  property,
  expectedValue,
  modifier
) {
  const component = renderer.create(Component).toJSON();
  expect(component).toHaveStyleRule(property, expectedValue, { modifier });
}

/**
 * Tests if a react component has a specific css property
 * @param {Renderable React object || Enzyme wrapper object} Component
 * @param {Object} props
 * @param {Object} newProps
 */
export function updateProps(Component, newProps) {
  if (Component.instance) return Component.setProps(newProps);

  shallow(Component).setProps(newProps);
}
