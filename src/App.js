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
import { PageTransition, Splash } from './components/molecules';


// *** pages ***
// main
const MainPages = import('./pages/');
const Home =
    React.lazy(() => MainPages.then(module => ({ default: module.Home })));
const LowDistractionMode =
    React.lazy(() => MainPages.then(module => ({ default: module.LowDistractionMode })));
// music
const MusicPages = import('./pages/music/');
const Music =
    React.lazy(() => MusicPages.then(module => ({ default: module.Music })));
const Playlists =
    React.lazy(() => MusicPages.then(module => ({ default: module.Playlists })));


function App() {

    /* utilities */
    // screen dimensions
    const getScreenDimensions = () => {
        const aspectRatio = 16/9;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        let newScreenDimensions = {
            width: windowWidth,
            height: windowWidth / aspectRatio
        };
        if (newScreenDimensions.height > windowHeight) {
            newScreenDimensions.height = windowHeight;
            newScreenDimensions.width = newScreenDimensions.height * aspectRatio;
        }

        return newScreenDimensions;
    };


    /* hooks:state */
    // screen dimensions
    const [ screenDimensions, setScreenDimensions ] = React.useState(getScreenDimensions());

    // theme
    const [ themeType, setThemeType ] = React.useState('light');

    // low distraction mode
    const [ lowDistractionMode, setLowDistractionMode ] = React.useState(false);

    // page transition
    const [ pageTransition, setPageTransition ] = React.useState(null);
    const [ pageTransitionIn, setPageTransitionIn ] = React.useState(false);

    // splash screen
    const [ splashIn, setSplashIn ] = React.useState(true);


    /* hooks */
    // react-router-dom
    const history = useHistory();

    /* hooks:refs */
    // page transition
    const pageTransitionRef = React.useRef(null);

    // splash
    const splashRef = React.useRef(null);


    /* hooks:effect */
    // window resize
    React.useEffect(() => {
        const handleResize = () => {
            setScreenDimensions(getScreenDimensions());
        };

        // attach event listener for window resize
        window.addEventListener('resize', handleResize);


        // return cleanup func to remove event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // cursor positioning
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
    const navWithTransition = (navTo, color, title, icon) => {
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

    // splash
    const handleSplashEntered = () => {
        console.log(`handleSplashEntered()`);

        setSplashIn(false);
    };

    const handleSplashExited = () => {
        console.log(`handleSplashExited()`);


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

                {/*<CSSTransition*/}
                {/*    in={splashIn}*/}
                {/*    timeout={{ enter: 2500, exit: 400 }}*/}
                {/*    classNames='splash'*/}
                {/*    // mountOnEnter*/}
                {/*    unmountOnExit*/}
                {/*    onEntered={() => handleSplashEntered()}*/}
                {/*    onExited={() => handleSplashExited()}*/}
                {/*    nodeRef={splashRef}*/}
                {/*    appear={true}*/}
                {/*    // enter={false}*/}
                {/*>*/}
                {/*    <Splash ref={splashRef} />*/}
                {/*</CSSTransition>*/}

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
                            <Route exact path={ROUTES.MUSIC.HOME} component={Music} />
                            <Route exact path={ROUTES.MUSIC.PLAYLISTS} component={Playlists} />
                        </Switch>
                    )}
                </React.Suspense>
            </Screen>
        </ThemeProvider>
    );
}

export default App;
