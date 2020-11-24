import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';


// *** styles ***
import GlobalStyle from './styles/GlobalStyle';
import { lightTheme } from './styles/theme';


// *** config ***
import * as ROUTES from './config/routes';


// *** atoms ***
import { Screen } from './components/atoms/grouping_content';
import Cursor from './components/atoms/Cursor';


// *** pages ***
const Home = React.lazy(() => import('./pages/Home'));



function App() {
    const [ dimensions, setDimensions ] = React.useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

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
    });

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


    // const [ cursorPos, setCursorPos ] = React.useState({ x: 0, y: 0 });
    // const cursorRef = React.useRef(null);
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
    });

    console.log('App.js render');

    return (
        <ThemeProvider
            theme={{ ...lightTheme(screenDimensions), screenDimensions }}
        >
            <GlobalStyle/>

            <Screen>
                <Cursor className='cursor' />
                <HashRouter>
                    <React.Suspense fallback={<p>Loading...</p>}>
                        <Switch>
                            <Route exact path={ROUTES.HOME} component={Home} />
                        </Switch>
                    </React.Suspense>
                </HashRouter>
            </Screen>
        </ThemeProvider>
    );
}

export default App;
