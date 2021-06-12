import React from "react";
import { shallow } from "enzyme";
import { demoTodos } from "../../fixtures/demoTodos";
import { TodoList } from "../../../components/08-useReducer/TodoList";
import { TodoItem } from "../../../components/08-useReducer/TodoItem";
describe("pruebas en <TodoList />", () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();
  const wrapper = shallow(
    <TodoList
      todos={demoTodos}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );
  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot()
  });

  test("debe de tener dos <TodoItem />", () => {
    // console.log(wrapper.find("TodoItem").length);
    expect(wrapper.find(TodoItem).length).toBe(demoTodos.length);
    expect(wrapper.find(TodoItem).at(0).prop('handleDelete')).toEqual(expect.any(Function))
    // console.log(wrapper.html())
  });
});
