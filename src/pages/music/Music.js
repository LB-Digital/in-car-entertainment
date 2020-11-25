import * as React from 'react';
import styled, { useTheme } from 'styled-components';
import { useHistory } from 'react-router-dom';


/* config */
import * as ROUTES from '../../config/routes';


/* components */
// atoms
import { ListMusicIcon, AlbumCollectionIcon, UserMusicIcon, ShuffleIcon } from '../../components/atoms/icons/solid';
// organisms
import { BigNav } from '../../components/organisms';


/* styles */
// styled components
const StyledMusic = styled('div')`
  flex: 1;
  
  display: flex;
  justify-content: center;
  align-items: center;
  //flex-direction: column;
  
  background: #C004D9;
`;


// Music page
const _Music = () => {

    /* hooks */
    // styled-components
    const theme = useTheme();

    // react-router-dom
    const history = useHistory();


    /* render */

    return (
        <StyledMusic>
            <BigNav
                primaryOptions={[
                    {
                        onClick: () => history.push(ROUTES.MUSIC.PLAYLISTS),
                        bGround: theme.colors.white,
                        color: theme.colors.dark,
                        icon: ListMusicIcon,
                        title: 'Playlists'
                    },
                    {
                        // onClick: () =>
                        bGround: theme.colors.white,
                        color: theme.colors.dark,
                        icon: AlbumCollectionIcon,
                        title: 'Albums'
                    },
                    {
                        // onClick: () =>
                        bGround: theme.colors.white,
                        color: theme.colors.dark,
                        icon: UserMusicIcon,
                        title: 'Artists'
                    }
                ]}

                secondaryOptions={[
                    {
                        // onClick: () =>
                        bGround: theme.colors.white,
                        color: theme.colors.dark,
                        icon: ShuffleIcon,
                        title: 'Shuffle All'
                    }
                ]}
            />
        </StyledMusic>
    );
};

export default _Music;