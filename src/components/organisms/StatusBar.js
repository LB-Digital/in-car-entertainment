import * as React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';
import { Link } from 'react-router-dom';


/* config */
import * as ROUTES from '../../config/routes';


/* components */
// atoms
import { HomeIcon, AdjustIcon, EyeSlashIcon } from '../atoms/icons/solid';
// molecules
import { UserSwitcher, TimeDisplay, WeatherDisplay } from '../molecules';


/* styles */
// config
const RelInfoSectionWidth = 0.18;

// styled components
const StyledStatusBar = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  padding: ${({ theme: { spacing } }) => (`${spacing.md}`)};
  
  background: ${({ theme: { colors } }) => (colors.white)};
`;

const BarSection = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 100%;
  padding: ${({ theme: { spacing } }) => (spacing.sm)};
  
  border-radius: ${({ theme: { borderRadius } }) => (borderRadius)};
  background: ${({ theme: { colors } }) => (transparentize(0.9, colors.dark))};
  
  
  & > *:not(:last-child) {
    margin-right: ${({ theme: { spacing } }) => (spacing.lg)};
  }
`;

const InfoSection = styled((props) => <BarSection {...props} />)`
  position: relative;
  z-index: 500;

  justify-content: space-evenly;
  width: ${({ theme: { screenDimensions } }) => (screenDimensions.width * RelInfoSectionWidth)}px;
`;


const StatusBar = ({ toggleTheme, toggleLowDistractionMode }) => {


    return (
        <StyledStatusBar>
            <BarSection>
                <UserSwitcher/>
            </BarSection>

            <BarSection>
                <EyeSlashIcon onClick={() => toggleLowDistractionMode()} size='sm' />

                <Link to={ROUTES.HOME}>
                    <HomeIcon size='sm' />
                </Link>

                <AdjustIcon onClick={() => toggleTheme()} size='sm' />
            </BarSection>


            <InfoSection>
                <WeatherDisplay/>
                <TimeDisplay/>
            </InfoSection>
        </StyledStatusBar>
    );
};

export default StatusBar;