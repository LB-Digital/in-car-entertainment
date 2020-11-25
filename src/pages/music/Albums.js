import * as React from 'react';
import styled from 'styled-components';


/* assets */
// img


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
    { title: '', artist: '', cover: '' }
];


const _Albums = () => {


    /* render */
    return (
        <StyledAlbums>
            <MusicVerticalNav/>

            <MusicDisplay
                items={AlbumItems}
            />
        </StyledAlbums>
    )
};

export default _Albums;