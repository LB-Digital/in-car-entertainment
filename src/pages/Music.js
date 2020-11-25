import * as React from 'react';
import styled, { useTheme } from 'styled-components';


/* components */
// atoms
import { ListMusicIcon, AlbumCollectionIcon, UserMusicIcon, ShuffleIcon } from '../components/atoms/icons/solid';
// organisms
import { BigNav } from '../components/organisms';


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


    /* render */

    return (
        <StyledMusic>
            <BigNav
                primaryOptions={[
                    {
                        // onClick: () =>
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