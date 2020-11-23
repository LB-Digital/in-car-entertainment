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
    const now = new Date();
    const hours = now.getHours();
    const mins = ('0' + now.getMinutes()).slice(-2);
    const time = `${hours}:${mins}`;


    return (
        <StyledStatusBar>
            <UserSwitcher/>

            <Header3>{ time }</Header3>
        </StyledStatusBar>
    );
};

export default StatusBar;