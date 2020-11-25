import * as React from 'react';
import styled from 'styled-components';


/* assets */
// img
import chillPlaylistCover from '../../assets/img/music/playlists/chill-cover.jpg';
import countryPlaylistCover from '../../assets/img/music/playlists/country-cover.jpg';
import lovePlaylistCover from '../../assets/img/music/playlists/love-cover.jpg';
import acousticPlaylistCover from '../../assets/img/music/playlists/acoustic-cover.jpg';
import moviesPlaylistCover from '../../assets/img/music/playlists/movies-cover.jpg';
import christmasPlaylistCover from '../../assets/img/music/playlists/christmas-cover.jpg';


/* components */
// organisms
import { MusicDisplay, MusicVerticalNav } from '../../components/organisms';


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


const _Playlists = () => {


    return (
        <StyledPlaylists>
            <MusicVerticalNav/>

            <MusicDisplay
                title='Playlists'
                items={[
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