import * as React from 'react';
import styled from 'styled-components';


/* components */
// molecules
import { BigNavOption } from '../molecules';


/* styles */
// config

// styled components
const BigNavWrapper = styled('div')`
  
`;

const StyledBigNav = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;


const _BigNav = ({ primaryOptions, secondaryOptions }) => {



    return (
        <BigNavWrapper>
            <StyledBigNav>
                {primaryOptions && (
                    primaryOptions.map((option, index) => (
                        <BigNavOption
                            key={`primary-option-${index}`}
                            {...option}
                        />
                    ))
                )}
            </StyledBigNav>

            <StyledBigNav>
                {secondaryOptions && (
                    secondaryOptions.map((option, index) => (
                        <BigNavOption
                            key={`secondary-option-${index}`}
                            small={true}
                            {...option}
                        />
                    ))
                )}
            </StyledBigNav>
        </BigNavWrapper>
    )
};

export default _BigNav;