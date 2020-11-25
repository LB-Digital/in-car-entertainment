import * as React from 'react';
import styled from 'styled-components';


/* assets */
// img
import antarcticMonkeysAvatar from '../../assets/img/music/artists/antarctic-monkeys.jpg';
import barryStylesAvatar from '../../assets/img/music/artists/barry-styles-avatar.jpg';
import dcAcAvatar from '../../assets/img/music/artists/dc-ac-avatar.jpg';
import macwoodFleetAvatar from '../../assets/img/music/artists/macwood-fleet-avatar.jpg';
import theWeekdayAvatar from '../../assets/img/music/artists/the-weekday-avatar.jpg';


/* components */
// organisms
import { MusicDisplay, MusicVerticalNav } from '../../components/organisms';


/* styles */
// styled components
const StyledArtists = styled('div')`
  flex: 1;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  overflow: hidden;
  
  padding: ${({ theme: { spacing } }) => spacing.sm};

  background: ${({ theme: { colors } }) => colors.pages.music};
`;


/* config */
const ArtistItems = [
    { title: 'Bloody Royal', cover: antarcticMonkeysAvatar },
    { title: 'Barry Styles', cover: barryStylesAvatar },
    { title: 'DC/AC', cover: dcAcAvatar },
    { title: 'Macwood Fleet', cover: macwoodFleetAvatar },
    { title: 'The Weekday', cover: theWeekdayAvatar }
];


const _Artists = () => {


    /* render */
    return (
        <StyledArtists>
            <MusicVerticalNav/>

            <MusicDisplay
                title='Artists'
                items={ArtistItems}
            />
        </StyledArtists>
    )
};

export default _Artists;