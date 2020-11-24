import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';


// *** styles ***
import GlobalStyle from './styles/GlobalStyle';
import { lightTheme, darkTheme } from './styles/theme';


// *** config ***
import * as ROUTES from './config/routes';


// *** atoms ***
import { Screen } from './components/atoms/grouping_content';
import Cursor from './components/atoms/Cursor';


// *** pages ***
const AllPages = import('./pages');
const Home =
    React.lazy(() => AllPages.then(module => ({ default: module.Home })));
const Music =
    React.lazy(() => AllPages.then(module => ({ default: module.Music })));
const LowDistractionMode =
    React.lazy(() => AllPages.then(module => ({ default: module.LowDistractionMode })));


function App() {
    /* state */
    // screen dimensions
    const [ dimensions, setDimensions ] = React.useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    // theme
    const [ themeType, setThemeType ] = React.useState('light');

    // low distraction mode
    const [ lowDistractionMode, setLowDistractionMode ] = React.useState(false);


    /* hooks */
    // effects
    React.useEffect(() => {
        const handleResize = () =>
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });

        // attach event listener for window resize
        window.addEventListener('resize', handleResize);


        // return cleanup func to remove event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const aspectRatio = (16/9);

    let screenDimensions = {
        width: dimensions.width,
        height: dimensions.width / aspectRatio
    };
    if (screenDimensions.height > dimensions.height) {
        screenDimensions.height = dimensions.height;
        screenDimensions.width = screenDimensions.height * aspectRatio;
    }
    // console.log(screenDimensions);


    React.useEffect(() => {
        const handleMouseMove = (ev) => {
            // setCursorPos({ x: ev.pageX, y: ev.pageY });
            const cursor = document.querySelector('.cursor');
            cursor.style.left = `${ev.pageX}px`;
            cursor.style.top = `${ev.pageY}px`;
        };

        document.addEventListener('mousemove', handleMouseMove);


        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);


    /* handlers */
    // theme
    const handleToggleTheme = () =>
        setThemeType((themeType === 'light') ? 'dark' : 'light');

    // low distraction mode
    const handleToggleLowDistractionMode = () =>
        setLowDistractionMode(!lowDistractionMode);


    /* render */
    const theme = (themeType === 'light')
        ? lightTheme(screenDimensions)
        : darkTheme(screenDimensions);

    return (
        <ThemeProvider
            theme={{ ...theme, screenDimensions }}
        >
            <GlobalStyle/>

            <HashRouter>
                <Screen
                    toggleTheme={handleToggleTheme}
                    toggleLowDistractionMode={handleToggleLowDistractionMode}
                    showStatusBar={!lowDistractionMode}
                >
                    <Cursor className='cursor' />
                    <React.Suspense fallback={<p>Loading...</p>}>
                        {lowDistractionMode ? (
                            <LowDistractionMode
                                toggleLowDistractionMode={handleToggleLowDistractionMode}
                            />
                        ) : (
                            <Switch>
                                <Route exact path={ROUTES.HOME} component={Home} />
                                <Route exact path={ROUTES.MUSIC} component={Music} />
                            </Switch>
                        )}
                    </React.Suspense>
                </Screen>
            </HashRouter>
        </ThemeProvider>
    );
}

export default App;
