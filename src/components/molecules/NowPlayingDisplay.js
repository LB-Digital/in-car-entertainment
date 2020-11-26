import * as React from 'react';
import styled from 'styled-components';


/* components */
// atoms
import { Header3 } from '../atoms/document_sections';
import { Strong } from '../atoms/text_level_semantics';
import { MusicIcon } from '../atoms/icons/solid';


/* styles */
// styled components
const StyledNowPlayingDisplay = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MusicIconWrapper = styled('div')`
  margin-right: ${({ theme: { spacing } }) => spacing.md};
`;


const _NowPlayingDisplay = () => {


    /* render */
    return (
        <StyledNowPlayingDisplay>
            <MusicIconWrapper>
                <MusicIcon size='sm' />
            </MusicIconWrapper>
            <div>
                <Header3>Lemonade (Remix)</Header3>
                <Strong>Internet Pounds & Richy Rod</Strong>
            </div>
        </StyledNowPlayingDisplay>
    );
};

export default _NowPlayingDisplay;