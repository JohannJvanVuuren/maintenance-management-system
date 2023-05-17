/* Import of the enzyme related modules and methods */
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';

/* Import of the expect assertion library from Chai */
import { expect } from 'chai';

/* Import of jest-dom for DOM node assertions*/
import '@testing-library/jest-dom';

/* Import of the components being tested */
import { LandingPage } from '../components/LandingPage';

/* Configuration of the enzyme adapter */
Enzyme.configure({ adapter: new Adapter() });

/* Testing of the rendering of the Header component */
describe('<LandingPage/> component', () => {
    /* Confirming that nine Link components are rendered */
    it('Renders one h1 element', () => {
        const wrapper = shallow(<LandingPage />);
        expect(wrapper.find('h1')).to.have.lengthOf(1);
    })

    it('Renders three p elements', () => {
        const wrapper = shallow(<LandingPage />);
        expect(wrapper.find('p')).to.have.lengthOf(3);
    })
})