import * as React from 'react';
import styled from 'styled-components';


/* components */
// molecules
import { VerticalNavOption } from '../molecules';


/* styles */
// styled components
const StyledVerticalNav = styled('div')`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  
  margin-right: ${({ theme: { spacing } }) => spacing.sm};
  padding: ${({ theme: { spacing } }) => spacing.sm};

  background: ${({ theme: { colors } }) => colors.screenBackground};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
`;


const _VerticalNav = ({ options }) => {


    return (
        <StyledVerticalNav>
            {options && (
                options.map((option, index) => (
                    <VerticalNavOption key={`v-nav-option-${index}`} {...option} />
                ))
            )}
        </StyledVerticalNav>
    );
};

export default _VerticalNav;