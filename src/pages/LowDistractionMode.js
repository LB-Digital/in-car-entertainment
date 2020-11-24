import * as React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';


/* components */
// atoms
import { Strong } from '../components/atoms/text_level_semantics';
// molecules
import { TimeDisplay, WeatherDisplay } from '../components/molecules';


/* styled */
// components
const StyledLowDistMode = styled('div')`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  margin: ${({ theme: { spacing } }) => spacing.md};
`;

const LowDistModeContent = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ExitHelpText = styled((props) => <Strong {...props} />)`
  color: ${({ theme: { colors } }) => transparentize(0.6, colors.dark)}!important;
`;


const _LowDistractionMode = ({ toggleLowDistractionMode }) => {

    /* hooks */
    // effects
    React.useEffect(() => {
        const handleClickAnywhere = () => {
            toggleLowDistractionMode();
        };

        document.addEventListener('click', handleClickAnywhere);

        return () => document.removeEventListener('click', handleClickAnywhere);
    });


    return (
        <StyledLowDistMode>
            <div/>

            <LowDistModeContent>
                <TimeDisplay size='lg' />
                <WeatherDisplay size='lg' />
            </LowDistModeContent>

            <ExitHelpText>Press Anywhere to Exit</ExitHelpText>
        </StyledLowDistMode>
    );
};

export default _LowDistractionMode;