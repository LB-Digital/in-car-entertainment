import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


/* config */
import * as ROUTES from '../../config/routes';


// *** firebase ***
import { functions } from '../../firebase';


// *** components ***
// atoms
import { Header3 } from '../atoms/document_sections';
import { HomeIcon } from '../atoms/icons/solid';
// molecules
import UserSwitcher from '../molecules/UserSwitcher';


// *** config ***
const WEATHER_LOCATION = 'Greenwich,gb';


// *** styled ***
// components
const StyledStatusBar = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  padding: ${({ theme: { spacing } }) => (`${spacing.md}`)};
  
  background: ${({ theme: { colors } }) => (colors.white)};
`;

const StatusInfo = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
`;


const WeatherDisplayWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-right: ${({ theme: { spacing } }) => (spacing.lg)};
`;

const WeatherIcon = styled('img')`
  width: ${({ theme: { screenDimensions } }) => (screenDimensions.width * 0.03)}px;
  
  margin-left: ${({ theme: { spacing } }) => (spacing.sm)};
`;

const WeatherDisplay = ({ temp, icon }) => {
    const roundedTemp = parseFloat(temp).toFixed(1);

    return (
        <WeatherDisplayWrapper>
            <Header3>{ roundedTemp }&#8451;</Header3>
            {icon && (
                <WeatherIcon src={icon} alt='current weather'/>
            )}
        </WeatherDisplayWrapper>
    )
};


const StatusBar = () => {
    // live time
    const getCurrentTime = () => {
        const now = new Date();
        const hours = now.getHours();
        const mins = ('0' + now.getMinutes()).slice(-2);

        return `${hours}:${mins}`;
    };

    const [ time, setTime ] = React.useState(getCurrentTime());

    // update time every second
    React.useEffect(() => {
        const timeInterval =
            setInterval(() => setTime(getCurrentTime()), 1000);

        return () => clearInterval(timeInterval);
    }, []);




    // live weather
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

    const [ weather, setWeather ] = React.useState(null);

    // update weather every minute
    React.useEffect( () => {
        const updateWeather = async () => {
            const weather = await getCurrentWeather();
            setWeather(weather);
        };

        // set get weather interval
        const weatherInterval =
            setInterval(updateWeather, 60000);
        // get initial weather
        (async () => await updateWeather())();

        return () => clearInterval(weatherInterval);
    }, []);


    return (
        <StyledStatusBar>
            <UserSwitcher/>

            <Link to={ROUTES.HOME}>
                <HomeIcon size='md' />
            </Link>

            <StatusInfo>
                {weather && (
                    <WeatherDisplay temp={weather.temp} icon={weather.icon} />
                )}

                <Header3>{ time }</Header3>
            </StatusInfo>
        </StyledStatusBar>
    );
};

export default StatusBar;