import React from "react";
import { shallow } from "enzyme";
import { TodoItem } from "../../../components/08-useReducer/TodoItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en <TodoItem />", () => {
  const handleDelete = jest.fn(() => {})
  const handleToggle = jest.fn(() => {})
  const wrapper = shallow(
    <TodoItem
      todo={demoTodos[0]}
      index={0}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );
  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de llamar la funcion handelDelete', () => {
    wrapper.find('button').simulate('click')
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id)
  })

  test('debe de llamar la funcion handleToggle', () => {
    wrapper.find('p').simulate('click')
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id)
  })

  test('debe de mostrar el texto correctamente', () => {
    const texto = wrapper.find('p').text().trim()
    expect(texto).toBe(`1. ${demoTodos[0].desc}`)
  })

  test('debe tener la clase complete si el TODO.done = true', () => {
    const todo = demoTodos[0];
    todo.done = true
    const wrapper = shallow(
      <TodoItem
        todo={todo}
        index={0}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    );
    expect(wrapper.find('p').hasClass('complete')).toBe(true)
  })
  

});
