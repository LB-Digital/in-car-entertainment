import * as React from 'react';
import styled from 'styled-components';


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
            <BigNav
                primaryOptions={[
                    {
                        onClick: () => handleClickNavOption('MUSIC'),
                        bGround: '#C004D9',
                        icon: MusicIcon,
                        title: 'MUSIC'
                    },
                    {
                        // onClick: () =>
                        bGround: '#5A13F2',
                        icon: RouteIcon,
                        title: 'NAV'
                    },
                    {
                        // onClick: () =>
                        bGround: '#138AF2',
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