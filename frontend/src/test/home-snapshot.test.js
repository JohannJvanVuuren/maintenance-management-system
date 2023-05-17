/* Import of the renderer module from react-test-renderer */
import renderer from 'react-test-renderer';

/* Import of component to be tested */
import { LandingPage} from "../components/LandingPage";

/* Snapshot test of the LandingPage component */
describe('Snapshot test of the LandingPage component', () => {
    it('LandingPage component renders correctly', () => {
        const tree = renderer.create(<LandingPage/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})