import * as React from 'react';
import styled from 'styled-components';
import KeyboardReact from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';


/* components */
// atoms
import { Header2 } from '../atoms/document_sections';


/* styles */
// config
const RelKeyHeight = 0.04;

// styled components
const KeyboardWrapper = styled('div')`
  position: relative;

    .simple-keyboard { // main keyboard
      opacity: ${({ micActive }) => (micActive ? 0 : 1)};
    
      padding: ${({ theme: { spacing } }) => spacing.sm};
    
      background: ${({ theme: { colors } }) => colors.screenBackground};
      border-radius: ${({ theme: { borderRadius } }) => borderRadius};
    }
    
    .simple-keyboard .hg-button { // keys
      height: ${({ theme: { screenDimensions } }) => (screenDimensions.width * RelKeyHeight)}px;
      
      background: ${({ theme: { colors } }) => colors.white};
      color: ${({ theme: { colors } }) => colors.dark};
      border: none;
      border-radius: ${({ theme: { borderRadius } }) => borderRadius};
      font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
    }
    
    .simple-keyboard .hg-button:active { // key pressed
      background: ${({ theme: { colors } }) => colors.dark};
      color: ${({ theme: { colors } }) => colors.white};;
    }
`;

const MicInputDisplay = styled('div')`
  display: ${({ micActive }) => (micActive ? 'flex' : 'none')};

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  justify-content: center;
  align-items: center;
  
  background: ${({ theme: { colors } }) => colors.screenBackground};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
`;


const KEYBOARD_LAYOUT = {
    default: [
        "1 2 3 4 5 6 7 8 9 0 - {bksp}",
        "q w e r t y u i o p",
        "{lock} a s d f g h j k l ' {enter}",
        "{shift} z x c v b n m , . / {shift}",
        "{space}"
    ],
};

const _ScreenKeyboard = ({ onChange, isMicActive }) => {

    /* hooks:state */
    // mic listening dots
    const [ dotsCount, setDotsCount ] = React.useState(1);


    /* hooks:effects */
    // mic listening dots
    React.useEffect(() => {
        const onDotsInterval = () => {
            setDotsCount((dotsCount+1) % 4);
        };

        const dotsInterval = setInterval(onDotsInterval, 500);

        return () => clearInterval(dotsInterval);
    });


    /* render */
    return (
        <KeyboardWrapper micActive={isMicActive}>
            <KeyboardReact
                layout={KEYBOARD_LAYOUT}
                theme='hg-theme-default'

                onChange={onChange}
            />

            <MicInputDisplay micActive={isMicActive}>
                <Header2>Listening for Mic Input{ '.'.repeat(dotsCount) }</Header2>
            </MicInputDisplay>
        </KeyboardWrapper>
    )
};

export default _ScreenKeyboard;