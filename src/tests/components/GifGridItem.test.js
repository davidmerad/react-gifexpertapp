import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('Pruebas en <GifGridItem />', () => {
    let title = 'titulo';
    let url = 'https://localhost/algo.jps';

    let wrapper = shallow(<GifGridItem title={title} url={url} />);
    beforeEach(() => {
        wrapper = shallow(<GifGridItem title={title} url={url} />); 
    });

    test('Debe mostrar <GifGridItem /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe tener un parrafo con el texto', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });
    
    test('Debe tener una imagen igual al URL y alt de los props', () => {
       const img = wrapper.find('img');
       const urlt = img.props().src;
       const alt = img.props().alt;
       expect(alt.trim()).toBe(title);
       expect(urlt).toBe(url); 
    });
    
    test('Debe tener animate__flipInY', () => {
        const img = wrapper.find('div');
        
        expect(img.hasClass('animate__flipInY')).toBe(true);
    });
    

})
