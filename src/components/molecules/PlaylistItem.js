import * as React from 'react';
import styled from 'styled-components';


/* components */
// atoms
import { Strong } from '../atoms/text_level_semantics';
import { Header3 } from '../atoms/document_sections';


/* styles */
// config
const RelPlaylistItemWidth = 0.15;

// styled components
const PlaylistItemWrapper = styled('div')`
  flex-basis: 20%;

  margin-bottom: ${({ theme: { spacing } }) => spacing.md};
`;

const StyledPlaylistItem = styled('div')`
  width: ${({ theme: { screenDimensions } }) => (screenDimensions.width * RelPlaylistItemWidth)}px;
`;

const PlaylistCover = styled(({ src, ...props }) => <div {...props} />)`
  width: 100%;
  height: ${({ theme: { screenDimensions } }) => (screenDimensions.width * RelPlaylistItemWidth)}px;
  
  margin-bottom: ${({ theme: { spacing } }) => spacing.xs};
  
  background-image: url(${({ src }) => src});
  background-size: cover;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
`;


const _PlaylistItem = ({ title, cover }) => {


    return (
        <PlaylistItemWrapper>
            <StyledPlaylistItem>
                <PlaylistCover src={cover} />
                <Header3>{ title }</Header3>
            </StyledPlaylistItem>
        </PlaylistItemWrapper>
    )
};

export default _PlaylistItem;