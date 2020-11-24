import * as React from 'react';
import styled from 'styled-components';


// *** components ***
// atoms
import { Header3 } from '../atoms/document_sections';
// molecules
import UserSwitcher from '../molecules/UserSwitcher';


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
    });


    // // live weather
    // const getCurrentWeather = () => {
    //
    // };


    return (
        <StyledStatusBar>
            <UserSwitcher/>

            <Header3>{ time }</Header3>
        </StyledStatusBar>
    );
};

export default StatusBar;