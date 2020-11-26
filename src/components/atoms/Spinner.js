import * as React from 'react';
import styled, { keyframes } from 'styled-components';


/* components */
// atoms
import { SteeringWheelIcon } from './icons/solid';


/* styles */
// animation
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
`;

// styled components
const StyledSpinner = styled('div')`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  
  svg {
    fill: ${({ theme: { colors } }) => colors.white};
  }
`;


const _Spinner = () => {


    /* render */
    return (
        <StyledSpinner>
            <SteeringWheelIcon />
        </StyledSpinner>
    )
};

export default _Spinner;