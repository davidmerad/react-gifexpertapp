import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

/* Pruebas con Custom Hooks */
describe('Pruebas en el hook useFetchGifs', () => {
    
    test('Debe de retornar el estado inicial', async () => {
        const {result, waitForNextUpdate} = renderHook(()=> useFetchGifs('One Punch'));
        const {data, loading} = result.current;
        //const {data: images, loading} = useFetchGifs('One Punch');
        // console.log(data,loading);
        await waitForNextUpdate({timeout:1500});
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('debe de retornar un arreglo de imgs y el loading en false', async () => {
        const {result, waitForNextUpdate } = renderHook(()=> useFetchGifs('One Punch'));
        await waitForNextUpdate({timeout:1500});
        const {data, loading} = result.current;
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
    
    
})
