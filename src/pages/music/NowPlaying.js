import * as React from 'react';
import styled from 'styled-components';


/* components */


/* styles */
// styled components
const StyledNowPlaying = styled('div')`
  flex: 1;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  overflow: hidden;
  
  padding: ${({ theme: { spacing } }) => spacing.sm};

  background: ${({ theme: { colors } }) => colors.pages.music};
`;


const _NowPlaying = () => {


    return (
        <StyledNowPlaying>
            <p>now playing!</p>
        </StyledNowPlaying>
    )
};

export default _NowPlaying;