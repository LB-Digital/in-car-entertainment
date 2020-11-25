import * as React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CSSTransition } from 'react-transition-group';


// *** styles ***
import GlobalStyle from './styles/GlobalStyle';
import { lightTheme, darkTheme } from './styles/theme';


// *** config ***
import * as ROUTES from './config/routes';


/* components */
// atoms
import { Screen } from './components/atoms/grouping_content';
import Cursor from './components/atoms/Cursor';
// molecules
import { PageTransition } from './components/molecules';


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

    // page transition
    const [ pageTransition, setPageTransition ] = React.useState(null);
    const [ pageTransitionIn, setPageTransitionIn ] = React.useState(false);


    /* hooks */
    // react-router-dom
    const history = useHistory();

    // refs
    const pageTransitionRef = React.useRef(null);

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
        const cursor = document.querySelector('.cursor');

        const handleMouseMove = (ev) => {
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

    // page transition
    const navWithTransition = async (navTo, color, title, icon) => {
        // console.log(`navWithTransition(${navTo}, ${color}, ${title}, icon:${!!icon})`);

        setPageTransition({ navTo, color, title, icon });
        setPageTransitionIn(true);
    };

    const handlePageTransitionEntered = () => {
        // console.log('handlePageTransitionEntered()');

        // route to new path
        history.push(pageTransition.navTo);

        // begin transition exit
        setPageTransitionIn(false);
    };

    const handlePageTransitionExited = () => {
        // clear state of prev transition
        setPageTransition(null);
    };


    /* render */
    const theme = (themeType === 'light')
        ? lightTheme(screenDimensions)
        : darkTheme(screenDimensions);

    return (
        <ThemeProvider
            theme={{ ...theme, screenDimensions }}
        >
            <GlobalStyle/>

            <Screen
                toggleTheme={handleToggleTheme}
                toggleLowDistractionMode={handleToggleLowDistractionMode}
                showStatusBar={!lowDistractionMode}
            >
                <Cursor className='cursor' />

                <CSSTransition
                    in={pageTransitionIn}
                    timeout={{ enter: 600, exit: 200 }}
                    classNames='page-transition'
                    mountOnEnter
                    unmountOnExit
                    onEntered={() => handlePageTransitionEntered()}
                    onExited={() => handlePageTransitionExited()}
                    nodeRef={pageTransitionRef}
                >
                    <PageTransition
                        ref={pageTransitionRef}
                        {...pageTransition}
                    />
                </CSSTransition>

                <React.Suspense fallback={<p>Loading...</p>}>
                    {lowDistractionMode ? (
                        <LowDistractionMode
                            toggleLowDistractionMode={handleToggleLowDistractionMode}
                        />
                    ) : (
                        <Switch>
                            <Route
                                exact
                                path={ROUTES.HOME}
                                component={() => <Home navWithTransition={navWithTransition} />}
                            />
                            <Route exact path={ROUTES.MUSIC} component={Music} />
                        </Switch>
                    )}
                </React.Suspense>
            </Screen>
        </ThemeProvider>
    );
}

export default App;
