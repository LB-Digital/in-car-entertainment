import * as React from 'react';
import styled from 'styled-components';


// *** organisms ***
import StatusBar from '../../organisms/StatusBar';


// *** styles ***
const ScreenWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  //position: relative;
`;

const StyledScreen = styled.div`
  width: ${({ theme: { screenDimensions } }) => (screenDimensions.width)}px;
  height: ${({ theme: { screenDimensions } }) => (screenDimensions.height)}px;

  padding: ${({ theme: { spacing } }) => (spacing.md)};
`;

const ScreenContent = styled.div`
  width: 100%;
  height: 100%;
  
  overflow: hidden;
  
  background: ${({ theme: { colors } }) => colors.screenBackground};
  border-radius: 10px;
  
  display: flex;
  flex-direction: column;
`;


const Screen = ({
                    toggleTheme,
                    toggleLowDistractionMode,
                    showStatusBar,

                    children
}) => {


    return (
        <ScreenWrapper>
            <StyledScreen>
                <ScreenContent>
                    {showStatusBar && (
                        <StatusBar
                            toggleTheme={toggleTheme}
                            toggleLowDistractionMode={toggleLowDistractionMode}
                        />
                    )}

                    { children }
                </ScreenContent>
            </StyledScreen>
        </ScreenWrapper>
    );
};


export default Screen;