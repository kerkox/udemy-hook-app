import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";
describe("Pruebas de useForm", () => {
  const initialForm = {
    name: "Paul",
    email: "paul@paul.com",
  };

  test("debe de regresar un formulario por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [formValues, handleInputChange, reset ] = result.current
    expect(formValues).toEqual(initialForm)
    expect(typeof handleInputChange).toBe('function')
    expect(typeof reset).toBe("function");
  });

  test("debe de cambiar el valor del formulario (cambiar name)", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;
    const newName = "Paul Cortes"
    act(() => {
      const data = {
        target: {
          name:'name',
          value:newName
        }
      }
      handleInputChange(data)
    })
    const [formValues] = result.current
    expect(formValues).toEqual({...initialForm, name:newName})
  });

  test('debe de re-establecer el formulario con RESET', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [info, setValue, reset] = result.current;
    const newName = "Paul Cortes";
    act(() => {
      const data = {
        target: {
          name: "name",
          value: newName,
        },
      };
      setValue(data)
      reset()
    })
    const [formValues] = result.current;
    expect(formValues).toEqual(initialForm)
  })
  
});
