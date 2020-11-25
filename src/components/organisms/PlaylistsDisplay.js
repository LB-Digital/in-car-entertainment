import * as React from 'react';
import styled from 'styled-components';


/* components */
// atoms
import { Header2 } from '../atoms/document_sections';
// molecules
import { PlaylistItem } from '../molecules';


/* styles */
// styled components
const StyledPlaylistsDisplay = styled('div')`
  flex: 1;
  height: 100%;

  // margin: ${({ theme: { spacing } }) => spacing.lg};
  padding: ${({ theme: { spacing } }) => spacing.md};
  
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  background: ${({ theme: { colors } }) => colors.screenBackground};
`;

const PlaylistsWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  
  margin-top: ${({ theme: { spacing } }) => spacing.md};
`;


const _PlaylistsDisplay = ({ playlists }) => {


    return (
        <StyledPlaylistsDisplay>
            <Header2>Playlists</Header2>

            <PlaylistsWrapper>
                {playlists && (
                    playlists.map((playlist, index) => (
                        <PlaylistItem
                            key={`playlist-${index}`}
                            {...playlist}
                        />
                    ))
                )}
            </PlaylistsWrapper>
        </StyledPlaylistsDisplay>
    )
};

export default _PlaylistsDisplay;