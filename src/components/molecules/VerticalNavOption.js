import * as React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


/* components */
// atoms
import { Strong } from '../atoms/text_level_semantics';


/* styles */
// styled components
const StyledVerticalNavOption = styled(NavLink)`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: ${({ theme: { spacing } }) => spacing.sm};
  
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  
  &.active {
    background: ${({ theme: { colors } }) => colors.white};
  }
`;


const _VerticalNavOption = ({ navTo, icon: Icon, title }) => {


    return (
        <StyledVerticalNavOption exact to={navTo}>
            <Icon size='sm' />
            <Strong>{ title }</Strong>
        </StyledVerticalNavOption>
    )
};

export default _VerticalNavOption;