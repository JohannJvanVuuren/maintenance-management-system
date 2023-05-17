/* Import of the enzyme related modules and methods */
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';

/* Import of the expect assertion library from Chai */
import { expect } from 'chai';

/* Import of jest-dom for DOM node assertions*/
import '@testing-library/jest-dom';

/* Import of the components being tested */
import { Header } from '../components/Header';
import { Link } from 'react-router-dom';

/* Configuration of the enzyme adapter */
Enzyme.configure({ adapter: new Adapter() });

/* Testing of the rendering of the Header component */
describe('<Header/> component', () => {
    /* Confirming that nine Link components are rendered */
    it('Renders nine Link components', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.find(Link)).to.have.lengthOf(9);
    })

    /* Confirming that eight .btn-nav buttons are rendered */
    it('Renders eight button elements', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('.btn-nav')).to.have.lengthOf(8)
    })
})