import * as React from 'react';
import styled from 'styled-components';


/* firebase */
import { functions } from '../../firebase';


/* components */
// atoms
import { Header3 } from '../atoms/document_sections';


/* config */
// constants
const WEATHER_LOCATION = 'Greenwich,gb';


/* styles */
// styled components
const WeatherDisplayWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const WeatherIcon = styled('img')`
  width: ${({ theme: { screenDimensions } }) => (screenDimensions.width * 0.03)}px;
  
  margin-left: ${({ theme: { spacing } }) => (spacing.sm)};
`;


const _WeatherDisplay = () => {

    /* utility methods */
    // get current weather
    const getCurrentWeather = async () => {
        let response;
        try {
            response = await functions.httpsCallable('getCurrentWeather')({
                location: WEATHER_LOCATION
            });

        } catch (err) {
            // on error, return mock data to simulate actions
            // (acceptable since this is an IxD prototype, not a code test)
            return { temp: 11 };
        }

        return response.data;
    };


    /* hooks */
    // state
    const [ weather, setWeather ] = React.useState(null);

    // effects
    React.useEffect( () => {
        const updateWeather = async () => {
            const weather = await getCurrentWeather();
            weather.temp = Math.round(weather.temp * 2)/2;
            setWeather(weather);
        };

        // set get weather interval (every 60 secs)
        const weatherInterval =
            setInterval(updateWeather, 60000);
        // get initial weather
        (async () => await updateWeather())();

        return () => clearInterval(weatherInterval);
    }, []);


    /* render */
    return (
        <WeatherDisplayWrapper>
            {weather && (
                <>
                    <Header3>{ weather.temp }&#8451;</Header3>
                    {weather.icon && (
                        <WeatherIcon src={weather.icon} alt='current weather'/>
                    )}
                </>
            )}
        </WeatherDisplayWrapper>
    );
};

export default _WeatherDisplay;