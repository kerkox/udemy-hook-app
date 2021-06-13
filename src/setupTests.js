// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom';
// import "jsdom-global/register";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createSerializer } from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));
import { JSDOM } from "jsdom";
const localStorageMock = (function () {
  var store = {};
  return {
    getItem: function (key) {
      return store[key] || null;
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    clear: function () {
      store = {};
    },
    removeItem: function (key) {
      delete store[key];
    },
  };
})();

const jsdom = new JSDOM("", { url: "https://localhost" });
const { window } = jsdom;
global.window = window;
global.document = window.document;
// jest.spyOn(window.localStorage, "setItem");
// window.localStorage.setItem = jest.fn(() => {});
// global.window = {
//   ...window,
//   localStorage: localStorageMock,
// };
global.localStorage = localStorageMock
// Object.defineProperty(window, "localStorage", { value: localStorageMock });
// global.window.localStorage = {}
// global.window.localStorage.setItem = jest.fn(() => {})
// global.window.localStorage.getItem = jest.fn(() => {})
// const localStorage = global.window.localStorage
// localStorage.prototype.setItem = jest.fn(() => {})
// localStorage.prototype.getItem = jest.fn(() => {})
// const { window } = jsdom_data;

// function copyProps(src, target) {
//   Object.defineProperties(target, {
//     ...Object.getOwnPropertyDescriptors(src),
//     ...Object.getOwnPropertyDescriptors(target),
//   });
// }

// console.log(window)
// global.window = window;
// global['document'] = window.document;
// global.navigator = {
//   userAgent: "node.js",
// };
// global.requestAnimationFrame = function (callback) {
//   return setTimeout(callback, 0);
// };
// global.cancelAnimationFrame = function (id) {
//   clearTimeout(id);
// };
// copyProps(window, global);
