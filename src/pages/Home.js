import * as React from 'react';
import styled, { useTheme } from 'styled-components';
import { useHistory } from 'react-router-dom';


/* config */
import * as ROUTES from '../config/routes';


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

const HomeNavOption = styled(
    React.forwardRef(
        (
            { small, ...props },
            ref
        ) => ( <div ref={ref} {...props} /> )
    ))`
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
const _Home = ({ navWithTransition }) => {

    /* UI event handlers */
    // on click
    const handleClickNavOption = async (navTo) => {
        if (navTo === 'MUSIC') {
            navWithTransition(ROUTES.MUSIC, '#C004D9', 'MUSIC', MusicIcon);
        }
    };


    /* render */
    return (
        <StyledHome>

            <HomeNav>
                <HomeNavOption onClick={() => handleClickNavOption('MUSIC')}>
                    <HomeNavOptionContent style={{ background: '#C004D9' }}>
                        <MusicIcon size='lg' />
                        <HomeNavOptionTitle>Music</HomeNavOptionTitle>
                    </HomeNavOptionContent>
                </HomeNavOption>

                <HomeNavOption>
                    <HomeNavOptionContent style={{ background: '#5A13F2' }}>
                        <RouteIcon size='lg' />
                        <HomeNavOptionTitle>Nav</HomeNavOptionTitle>
                    </HomeNavOptionContent>
                </HomeNavOption>

                <HomeNavOption>
                    <HomeNavOptionContent style={{ background: '#138AF2' }}>
                        <CarIcon size='lg' />
                        <HomeNavOptionTitle>Car</HomeNavOptionTitle>
                    </HomeNavOptionContent>
                </HomeNavOption>
            </HomeNav>

            <HomeNav>
                <HomeNavOption small={true}>
                    <HomeNavOptionContent style={{ background: '#333' }}> {/* 8338ec */}
                        <PhoneIcon size='lg' />
                        <HomeNavOptionTitle small={true}>Phone</HomeNavOptionTitle>
                    </HomeNavOptionContent>
                </HomeNavOption>

                <HomeNavOption small={true}>
                    <HomeNavOptionContent style={{ background: '#333' }}> {/* fb5607 */}
                        <CommentsIcon size='lg' />
                        <HomeNavOptionTitle small={true}>Messages</HomeNavOptionTitle>
                    </HomeNavOptionContent>
                </HomeNavOption>

                <HomeNavOption small={true}>
                    <HomeNavOptionContent style={{ background: '#333' }}>
                        <CogIcon size='lg' />
                        <HomeNavOptionTitle small={true}>Settings</HomeNavOptionTitle>
                    </HomeNavOptionContent>
                </HomeNavOption>
            </HomeNav>
        </StyledHome>
    )
};

export default _Home;