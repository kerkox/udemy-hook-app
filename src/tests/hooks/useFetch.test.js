import { renderHook } from "@testing-library/react-hooks"
import { useFetch } from '../../hooks/useFetch'
describe('Pruebas enb useFetch', () => {

  test('debe de retornar la informacion por defecto', () => {
    const {result } = renderHook(() => useFetch(`https://breakingbadapi.com/api/quotes/1`));

    const { data, loading, error} = result.current
    expect( data ).toBe(null);
    expect( loading ).toBe(true);
    expect( error ).toBe(null)
  })

  test('debe de tener la info deseada, loading false, error false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(`https://breakingbadapi.com/api/quotes/1`)
    );
    await waitForNextUpdate({timeout: 2000});

    const { data, loading, error } = result.current;
    expect( data.length ).toBe(1);
    expect( loading ).toBe(false);
    
  })

  test('debe de tener la info deseada, loading false, error false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(`https://reqres.in/apid/users?page=2`)
    );
    await waitForNextUpdate();

    const { data, loading, error } = result.current;

    expect( data ).toBe(null);
    expect( loading ).toBe(false);
    expect(error).toBe("No se pudo cargar la info");
    
  })


  
  
  
})
