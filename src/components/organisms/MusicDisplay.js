import * as React from 'react';
import styled from 'styled-components';


/* components */
// atoms
import { Header2 } from '../atoms/document_sections';
// molecules
import { MusicDisplayItem } from '../molecules';


/* styles */
// styled components
const StyledMusicDisplay = styled('div')`
  flex: 1;
  height: 100%;

  padding: ${({ theme: { spacing } }) => spacing.md};
  
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  background: ${({ theme: { colors } }) => colors.screenBackground};
`;

const ItemsWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  
  margin-top: ${({ theme: { spacing } }) => spacing.md};
`;


const _MusicDisplay = ({ items }) => {


    return (
        <StyledMusicDisplay>
            <Header2>Playlists</Header2>

            <ItemsWrapper>
                {items && (
                    items.map((item, index) => (
                        <MusicDisplayItem
                            key={`music-item-${index}`}
                            {...item}
                        />
                    ))
                )}
            </ItemsWrapper>
        </StyledMusicDisplay>
    )
};

export default _MusicDisplay;