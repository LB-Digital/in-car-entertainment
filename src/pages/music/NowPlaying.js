import * as React from 'react';
import styled from 'styled-components';


/* assets */
// img
import lemonadeCover from '../../assets/img/music/songs/lemonade-cover.jpg';
import smileCover from '../../assets/img/music/songs/smile-cover.jpg';
import blackberryCover from '../../assets/img/music/songs/blackberry-cover.jpg';


/* components */
// atoms
import { Header2, Header3 } from '../../components/atoms/document_sections';
import { Strong } from '../../components/atoms/text_level_semantics';
import { PlayIcon, ForwardIcon, BackwardIcon, PauseIcon } from '../../components/atoms/icons/solid';
// organisms
import { MusicVerticalNav } from '../../components/organisms';


/* styles */
// config
const RelCoverSize = 0.25;
const RelCoverMutedSize = 0.2;

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
`;


const PlayerControls = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  
  padding: ${({ theme: { spacing } }) => spacing.sm};
  
  background: ${({ theme: { colors } }) => colors.white};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  
  
  & > *:not(:last-child) {
    margin-right: ${({ theme: { spacing } }) => spacing.lg};
  }
`;


const Tracks = [
    { title: 'Smile - Single', artist: 'Juicy World & The WeekDay', cover: smileCover },
    { title: 'Lemonade (Remix)', artist: 'Internet Pounds, Ton Doliver & Richy Rod', cover: lemonadeCover },
    { title: 'Blackberry Faygo', artist: 'Big Mosey', cover: blackberryCover }
];
const _NowPlaying = () => {

    /* hooks:state */
    // playing
    const [ isPlaying, setIsPlaying ] = React.useState(true);

    // current track
    const [ trackNum, setTrackNum ] = React.useState(1);


    /* UI handlers */
    // next track
    const handlePressNextTrack = () => {
        if ((trackNum + 1) > (Tracks.length - 1)) {
            setTrackNum(0);
        } else {
            setTrackNum(trackNum + 1);
        }
    };

    // prev track
    const handlePressPrevTrack = () => {
        if ((trackNum - 1) < 0) {
            setTrackNum(Tracks.length - 1);
        } else {
            setTrackNum(trackNum - 1);
        }
    };


    /* render */
    const currentTrack = Tracks[trackNum];
    const prevTrack = (trackNum - 1 < 0)
        ? Tracks[Tracks.length-1]
        : Tracks[trackNum - 1];
    const nextTrack = ((trackNum + 1) > (Tracks.length - 1))
        ? Tracks[0]
        : Tracks[trackNum + 1];

    return (
        <StyledNowPlaying>
            <MusicVerticalNav/>

            <NowPlayingWrapper>
                <Header2>Now Playing</Header2>

                <NowPlayingContentWrapper>
                    <NowPlayingContent muted={true}>
                        <NowPlayingCover src={prevTrack.cover} alt='lemonade cover' />

                        <NowPlayingTextWrapper>
                            <Header3>{ prevTrack.title }</Header3>
                            <Strong>{ prevTrack.artist }</Strong>
                        </NowPlayingTextWrapper>
                    </NowPlayingContent>

                    <NowPlayingContent>
                        <NowPlayingCover src={currentTrack.cover} alt='lemonade cover' />

                        <NowPlayingTextWrapper>
                            <Header3>{ currentTrack.title }</Header3>
                            <Strong>{ currentTrack.artist }</Strong>
                        </NowPlayingTextWrapper>
                    </NowPlayingContent>

                    <NowPlayingContent muted={true}>
                        <NowPlayingCover src={nextTrack.cover} alt='lemonade cover' />

                        <NowPlayingTextWrapper>
                            <Header3>{ nextTrack.title }</Header3>
                            <Strong>{ nextTrack.artist }</Strong>
                        </NowPlayingTextWrapper>
                    </NowPlayingContent>
                </NowPlayingContentWrapper>


                <PlayerControls>
                    <BackwardIcon size='sm' onClick={handlePressPrevTrack} />
                    {isPlaying ? (
                        <PauseIcon size='sm' onClick={() => setIsPlaying(false)} />
                    ) : (
                        <PlayIcon size='sm' onClick={() => setIsPlaying(true)} />
                    )}
                    <ForwardIcon size='sm' onClick={handlePressNextTrack} />
                </PlayerControls>
            </NowPlayingWrapper>
        </StyledNowPlaying>
    )
};

export default _NowPlaying;