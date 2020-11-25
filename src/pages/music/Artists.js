import * as React from 'react';
import styled from 'styled-components';


/* assets */
// img



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
    // { title: 'Thick Line', artist: 'Barry Styles', cover: thickLineCover },
    // { title: 'Power Down', artist: 'DC/AC', cover: powerDownCover },
    // { title: 'AM', artist: 'Antarctic Monkeys', cover: antarcticMonkeyCover },
    // { title: 'After Hours', artist: 'The Weekday', cover: afterHoursCover },
    // { title: 'Rumours', artist: 'Macwood Fleet', cover: rumoursCover }
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