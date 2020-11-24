import * as React from 'react';
import styled from 'styled-components';


// *** atoms ***
import { Header2, Header3 } from '../components/atoms/document_sections';
import { MusicIcon, RouteIcon, PhoneIcon, CommentsIcon, CogIcon, CarIcon } from '../components/atoms/icons/solid';


// *** styled ***
// config
const RelNavOptionSize = 0.2;
const RelNavOptionSizeSmall = 0.12;

// components
const StyledHome = styled('div')`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const HomeNav = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const HomeNavOption = styled(({ small, ...props }) => (<div {...props} />))`
  width: ${({ theme: { screenDimensions } }) => (screenDimensions.width * RelNavOptionSize)}px;
  height: ${({ small, theme: { screenDimensions } }) =>
        (screenDimensions.width * (
            small
                ? RelNavOptionSizeSmall
                : RelNavOptionSize
        ))}px;

  padding: ${({ theme: { spacing } }) => (spacing.md)};
`;


const HomeNavOptionContent = styled('div')`
  //height: 20vw;
  width: 100%;
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  padding: ${({ theme: { spacing } }) => (spacing.md)};

  border-radius: ${({ theme: { borderRadius } }) => (borderRadius)};
  
  svg {
    fill: #fff;
  }
`;

const HomeNavOptionTitle = styled(({ small, ...props }) => (
    small
        ? <Header3 {...props} />
        : <Header2 {...props} />
))`
  margin-top: ${({ theme: { spacing } }) => spacing.md};

  text-transform: uppercase;
  text-align: center;
  color: #fff;
`;


// Home page
const Home = () => {


    return (
        <StyledHome>

            <HomeNav>
                <HomeNavOption>
                    <HomeNavOptionContent style={{ background: '#D60E0A' }}>
                        <MusicIcon width='60%' />
                        <HomeNavOptionTitle>Music</HomeNavOptionTitle>
                    </HomeNavOptionContent>
                </HomeNavOption>

                <HomeNavOption>
                    <HomeNavOptionContent style={{ background: '#22D354' }}>
                        <RouteIcon width='60%' />
                        <HomeNavOptionTitle>Nav</HomeNavOptionTitle>
                    </HomeNavOptionContent>
                </HomeNavOption>

                <HomeNavOption>
                    <HomeNavOptionContent style={{ background: '#6e44ff' }}>
                        <CarIcon width='60%' />
                        <HomeNavOptionTitle>Car</HomeNavOptionTitle>
                    </HomeNavOptionContent>
                </HomeNavOption>
            </HomeNav>

            <HomeNav>
                <HomeNavOption small={true}>
                    <HomeNavOptionContent style={{ background: '#333' }}> {/* 8338ec */}
                        <PhoneIcon width='60%' />
                        <HomeNavOptionTitle small={true}>Phone</HomeNavOptionTitle>
                    </HomeNavOptionContent>
                </HomeNavOption>

                <HomeNavOption small={true}>
                    <HomeNavOptionContent style={{ background: '#333' }}> {/* fb5607 */}
                        <CommentsIcon width='60%' />
                        <HomeNavOptionTitle small={true}>Messages</HomeNavOptionTitle>
                    </HomeNavOptionContent>
                </HomeNavOption>

                <HomeNavOption small={true}>
                    <HomeNavOptionContent style={{ background: '#333' }}>
                        <CogIcon width='60%' />
                        <HomeNavOptionTitle small={true}>Settings</HomeNavOptionTitle>
                    </HomeNavOptionContent>
                </HomeNavOption>
            </HomeNav>
        </StyledHome>
    )
};

export default Home;