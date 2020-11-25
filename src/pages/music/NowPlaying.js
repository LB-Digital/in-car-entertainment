import * as React from 'react';
import styled from 'styled-components';


/* assets */
// img
import lemonadeCover from '../../assets/img/music/songs/lemonade-cover.jpg';


/* components */
// atoms
import { Header2, Header3 } from '../../components/atoms/document_sections';
import { Strong } from '../../components/atoms/text_level_semantics';
// organisms
import { MusicVerticalNav } from '../../components/organisms';


/* styles */
// config
const RelCoverSize = 0.25;
const RelCoverMutedSize = 0.15;

// styled components
const StyledNowPlaying = styled('div')`
  flex: 1;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  overflow: hidden;
  
  padding: ${({ theme: { spacing } }) => spacing.sm};

  background: ${({ theme: { colors } }) => colors.pages.music};
`;

const NowPlayingWrapper = styled('div')`
  flex: 1;
  height: 100%;
  
  display: flex;
  flex-direction: column;

  padding: ${({ theme: { spacing } }) => spacing.md};
  
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  background: ${({ theme: { colors } }) => colors.screenBackground};
`;

const NowPlayingContentWrapper = styled('div')`
  flex: 1;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const NowPlayingContent = styled(({ muted, ...props }) => <div {...props} />)`
  //flex: 1;

  display: flex;
  flex-direction: column;
  
  padding: ${({ theme: { spacing } }) => spacing.sm};
  
  background: ${({ theme: { colors } }) => colors.white};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  text-align: center;
  
  opacity: ${({ muted }) => (muted ? 0.5 : 1)};
  
  & img.cover-img {
    width: ${({ muted, theme: { screenDimensions } }) => (screenDimensions.width * (muted ? RelCoverMutedSize : RelCoverSize))}px;
  }
`;

const NowPlayingCover = styled(({ src, alt, className, ...props }) => <img src={src} alt={alt} {...props} className={`${className || ''} cover-img`} />)`
  margin: ${({ theme: { spacing } }) => `0 auto ${spacing.sm}`};

  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
`;

const NowPlayingTextWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  //text-align: center;
`;


const _NowPlaying = () => {


    return (
        <StyledNowPlaying>
            <MusicVerticalNav/>

            <NowPlayingWrapper>
                <Header2>Now Playing</Header2>

                <NowPlayingContentWrapper>
                    <NowPlayingContent muted={true}>
                        <NowPlayingCover src={lemonadeCover} alt='lemonade cover' />

                        <NowPlayingTextWrapper>
                            <Header3>Lemonade (Remix)</Header3>
                            <Strong>Internet Money, Don Toliver & Roddy Ricch</Strong>
                        </NowPlayingTextWrapper>
                    </NowPlayingContent>

                    <NowPlayingContent>
                        <NowPlayingCover src={lemonadeCover} alt='lemonade cover' />

                        <NowPlayingTextWrapper>
                            <Header3>Lemonade (Remix)</Header3>
                            <Strong>Internet Money, Don Toliver & Roddy Ricch</Strong>
                        </NowPlayingTextWrapper>
                    </NowPlayingContent>

                    <NowPlayingContent muted={true}>
                        <NowPlayingCover src={lemonadeCover} alt='lemonade cover' />

                        <NowPlayingTextWrapper>
                            <Header3>Lemonade (Remix)</Header3>
                            <Strong>Internet Money, Don Toliver & Roddy Ricch</Strong>
                        </NowPlayingTextWrapper>
                    </NowPlayingContent>
                </NowPlayingContentWrapper>
            </NowPlayingWrapper>
        </StyledNowPlaying>
    )
};

export default _NowPlaying;