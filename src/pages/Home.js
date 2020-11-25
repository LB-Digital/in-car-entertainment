import * as React from 'react';
import styled, { useTheme } from 'styled-components';


/* config */
import * as ROUTES from '../config/routes';


/* components */
// atoms
import { MusicIcon, RouteIcon, PhoneIcon, CommentsIcon, CogIcon, CarIcon } from '../components/atoms/icons/solid';
// organisms
import { BigNav } from '../components/organisms';


/* styles */
// components
const StyledHome = styled('div')`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


// Home page
const _Home = ({ navWithTransition }) => {

    /* hooks */
    // styled-components
    const theme = useTheme();


    /* UI event handlers */
    // on click
    const handleClickNavOption = async (navTo) => {
        if (navTo === 'MUSIC') {
            navWithTransition(ROUTES.MUSIC.HOME, theme.colors.pages.music, 'MUSIC', MusicIcon);
        }
    };


    /* render */
    return (
        <StyledHome>
            <BigNav
                primaryOptions={[
                    {
                        onClick: () => handleClickNavOption('MUSIC'),
                        bGround: theme.colors.pages.music,
                        icon: MusicIcon,
                        title: 'MUSIC'
                    },
                    {
                        // onClick: () =>
                        bGround: theme.colors.pages.nav,
                        icon: RouteIcon,
                        title: 'NAV'
                    },
                    {
                        // onClick: () =>
                        bGround: theme.colors.pages.car,
                        icon: CarIcon,
                        title: 'CAR'
                    }
                ]}

                secondaryOptions={[
                    {
                        // onClick: () =>
                        bGround: '#333',
                        icon: PhoneIcon,
                        title: 'PHONE'
                    },
                    {
                        // onClick: () =>
                        bGround: '#333',
                        icon: CommentsIcon,
                        title: 'MESSAGES'
                    },
                    {
                        // onClick: () =>
                        bGround: '#333',
                        icon: CogIcon,
                        title: 'SETTINGS'
                    }
                ]}
            />
        </StyledHome>
    );
};

export default _Home;