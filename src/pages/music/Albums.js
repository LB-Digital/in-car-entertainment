import * as React from 'react';
import styled from 'styled-components';


/* assets */
// img
import thickLineCover from '../../assets/img/music/albums/thick-line-cover.jpg';
import powerDownCover from '../../assets/img/music/albums/power-down-cover.jpg';
import antarcticMonkeyCover from '../../assets/img/music/albums/antarctic-monkey-cover.jpg';
import afterHoursCover from '../../assets/img/music/albums/after-hours-cover.jpg';
import rumoursCover from '../../assets/img/music/albums/rumours-cover.jpg';


/* components */
// organisms
import { MusicDisplay, MusicVerticalNav } from '../../components/organisms';


/* styles */
// styled components
const StyledAlbums = styled('div')`
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
const AlbumItems = [
    { title: 'Thick Line', artist: 'Barry Styles', cover: thickLineCover },
    { title: 'Power Down', artist: 'DC/AC', cover: powerDownCover },
    { title: 'AM', artist: 'Antarctic Monkeys', cover: antarcticMonkeyCover },
    { title: 'After Hours', artist: 'The Weekday', cover: afterHoursCover },
    { title: 'Rumours', artist: 'Macwood Fleet', cover: rumoursCover }
];


const _Albums = () => {


    /* render */
    return (
        <StyledAlbums>
            <MusicVerticalNav/>

            <MusicDisplay
                title='Albums'
                items={AlbumItems}
            />
        </StyledAlbums>
    )
};

export default _Albums;