import * as React from 'react';
import styled from 'styled-components';


/* config */
import * as ROUTES from '../../config/routes';


/* assets */
// img
import chillPlaylistCover from '../../assets/img/music/playlists/chill-cover.jpg';
import countryPlaylistCover from '../../assets/img/music/playlists/country-cover.jpg';
import lovePlaylistCover from '../../assets/img/music/playlists/love-cover.jpg';
import acousticPlaylistCover from '../../assets/img/music/playlists/acoustic-cover.jpg';
import moviesPlaylistCover from '../../assets/img/music/playlists/movies-cover.jpg';
import christmasPlaylistCover from '../../assets/img/music/playlists/christmas-cover.jpg';


/* components */
// atoms
import {AlbumCollectionIcon, ListMusicIcon, MusicIcon, UserMusicIcon} from '../../components/atoms/icons/solid';
// organisms
import { PlaylistsDisplay, VerticalNav } from '../../components/organisms';


/* styles */
// styled components
const StyledPlaylists = styled('div')`
  flex: 1;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  overflow: hidden;
  
  padding: ${({ theme: { spacing } }) => spacing.sm};

  background: ${({ theme: { colors } }) => colors.pages.music};
`;


const _Playlists = ({  }) => {


    return (
        <StyledPlaylists>
            <VerticalNav
                options={[
                    { navTo: ROUTES.MUSIC.HOME, icon: MusicIcon, title: 'Music' },
                    { navTo: ROUTES.MUSIC.PLAYLISTS, icon: ListMusicIcon, title: 'Playlists' },
                    { navTo: ROUTES.MUSIC.HOME, icon: AlbumCollectionIcon, title: 'Albums' },
                    { navTo: ROUTES.MUSIC.HOME, icon: UserMusicIcon, title: 'Artists' }
                ]}
            />

            <PlaylistsDisplay
                playlists={[
                    {
                        title: 'Chill',
                        cover: chillPlaylistCover
                    },
                    {
                        title: 'Country',
                        cover: countryPlaylistCover
                    },
                    {
                        title: 'Love',
                        cover: lovePlaylistCover
                    },
                    {
                        title: 'Movies',
                        cover: moviesPlaylistCover
                    },
                    {
                        title: 'Acoustic',
                        cover: acousticPlaylistCover
                    },
                    {
                        title: 'Christmas',
                        cover: christmasPlaylistCover
                    }
                ]}
            />
        </StyledPlaylists>
    );
};

export default _Playlists;