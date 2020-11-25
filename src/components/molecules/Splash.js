import * as React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';


/* components */
// atoms
import { Header2 } from '../atoms/document_sections';
import { Strong } from '../atoms/text_level_semantics';
import { SeatBeltIcon, TachometerIcon, WineBottleIcon } from '../atoms/icons/solid';


/* styles */
// config
const RelInfoColSize = 0.12;

// styled components
const StyledSplash = styled(React.forwardRef((
    props,
    ref
) => <div {...props} ref={ref} />))`

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ theme: { screenDimensions, spacing } }) => (screenDimensions.width - (spacing.raw.md * 2))}px;
  height: ${({ theme: { screenDimensions, spacing } }) => (screenDimensions.height - (spacing.raw.md * 2))}px;
  //z-index: 990;
  
  background: ${({ theme: { colors } }) => colors.dark};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  
  
  &.splash-exit {
    opacity: 1;
  }
  
  &.splash-exit-active {
    opacity: 0;
    transition: opacity 400ms;
  }
`;

const SplashContent = styled('div')`
  width: 100%;
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SplashTitle = styled((props) => <Header2 {...props} />)`
  margin-bottom: ${({ theme: { spacing } }) => spacing.lg};

  color: #fff;
`;

const SplashInfo = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  svg {
    fill: #fff;
  }
`;

const SplashInfoCol = styled('div')`
  width: ${({ theme: { screenDimensions } }) => (screenDimensions.width * RelInfoColSize)}px;
  height: ${({ theme: { screenDimensions } }) => (screenDimensions.width * RelInfoColSize)}px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  padding: ${({ theme: { spacing } }) => `${spacing.md} 0`};
  
  background: ${({ theme: { colors } }) => transparentize(0.9, colors.white)};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  
  &:not(:last-child) {
    margin-right: ${({ theme: { spacing } }) => spacing.md};
  }
`;

const SplashInfoIconWrapper = styled('div')`
  flex: 1;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SplashInfoText = styled((props) => <Strong {...props} />)`
  margin-top: ${({ theme: { spacing } }) => spacing.md};

  color: #fff!important;
`;


const _Splash = React.forwardRef((
    props,
    ref
) => {


    return (
        <StyledSplash ref={ref}>
            <SplashContent>
                <SplashTitle>Welcome to Your Car!</SplashTitle>

                <SplashInfo>
                    <SplashInfoCol>
                        <SplashInfoIconWrapper>
                            <SeatBeltIcon />
                        </SplashInfoIconWrapper>
                        <SplashInfoText>Wear your Seat Belt</SplashInfoText>
                    </SplashInfoCol>

                    <SplashInfoCol>
                        <SplashInfoIconWrapper>
                            <TachometerIcon />
                        </SplashInfoIconWrapper>
                        <SplashInfoText>Watch your Speed</SplashInfoText>
                    </SplashInfoCol>

                    <SplashInfoCol>
                        <SplashInfoIconWrapper>
                            <WineBottleIcon/>
                        </SplashInfoIconWrapper>
                        <SplashInfoText>Don't Drink and Drive</SplashInfoText>
                    </SplashInfoCol>
                </SplashInfo>
            </SplashContent>
        </StyledSplash>
    )
});

export default _Splash;