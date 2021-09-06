import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas en <GifGrid />', () => {
    let category = 'One Punch';
    // let wrapper = shallow(<GifGrid category={category} />);

    // beforeEach(()=>{
    //     wrapper =  shallow(<GifGrid category={category} />);
    // });

    test('Debe mostrar correctamente el <GifGrid />', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'cualquier cosa',
                url: 'https://log.com/img.jpg'
            },
            {
                id: 'ABCD',
                title: 'cualquier cosa',
                url: 'https://log.com/img.jpg'
            }
        ];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category} />);
        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
    
    
})
