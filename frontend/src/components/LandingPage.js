/* Import of main stylesheet generated by the SCSS files and preprocessor */
import '../scss/main.css';

/* Definition of the page that will greet the user when first navigating to the application */
export const LandingPage = () => {
    return (
        <div className={'landing-container'}>
            <h1>Welcome</h1>
            <p>This system assists with the management of maintenance jobs and their tracking.</p>
            <p>Navigation through the system takes place though the navigation buttons at the top of the screen.</p>
            <p>To return to the home page click on the title at the top of the page.</p>
        </div>
    )
}