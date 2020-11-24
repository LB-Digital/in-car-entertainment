import * as React from 'react';
import styled, { useTheme } from 'styled-components';
import { useHistory } from 'react-router-dom';


/* components */
// atoms
import { Header2 } from '../atoms/document_sections';


/* styles */
// config

// styled components
const StyledPageTransition = styled(
    React.forwardRef((props, ref) => (
        <div ref={ref} {...props} />
    )))`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  
  width: 0;
  height: 0;
  opacity: 0;
  border-radius: 50%;
  
  transition: all 0.2s ease-out;
`;

const PageTransitionContent = styled('div')`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  svg {
    fill: #fff;
  }
`;

const PageTransitionTitle = styled((props) => <Header2 {...props} />)`
  margin-top: ${({ theme: { spacing } }) => spacing.md};
  
  text-transform: uppercase;
  text-align: center;
  color: #fff;
`;


const _PageTransition = ({ navTo, color, title, icon: Icon, onPageTransitionEnd }) => {

    /* hooks */
    // styled-components
    const theme = useTheme();

    // history
    const history = useHistory();

    // refs
    const pageTransRef = React.createRef();

    // effects
    React.useEffect(() => {
        const transEl = pageTransRef.current;

        let transInEndCount = 0;
        const onTransitionInEnd = async () => {
            // only continue once all transitions complete
            // (background, border-radius*4 corners, width, height, opacity)
            if (++transInEndCount !== 8)
                return;

            // remove event listener
            transEl.removeEventListener('transitionend', onTransitionInEnd);

            // nav to new page
            history.push(navTo);

            // wait slight delay
            await new Promise(resolve => setTimeout(resolve, 400));

            // add new event listener to wait for opacity to fade out
            transEl.addEventListener('transitionend', onTransitionOutEnd, { once: true });

            // fade away transEl
            transEl.style.opacity = 0;
        };

        transEl.addEventListener('transitionend', onTransitionInEnd);

        transEl.style.background = color;

        const newWidth = theme.screenDimensions.width - (theme.spacing.raw.md * 2);
        const newHeight = theme.screenDimensions.height - (theme.spacing.raw.md * 2);
        transEl.style.width = `${newWidth}px`;
        transEl.style.height = `${newHeight}px`;
        transEl.style.borderRadius = theme.borderRadius;
        transEl.style.opacity = 1;


        const onTransitionOutEnd = () => {
            onPageTransitionEnd();
        };


        return () => {
            // remove all event listeners in case of unmount midway through transition
            transEl.removeEventListener('transitionend', onTransitionInEnd);
            transEl.removeEventListener('transitionend', onTransitionOutEnd);
        }
    });


    /* render */
    return (
        <StyledPageTransition ref={pageTransRef}>
            <PageTransitionContent>
                <Icon size='lg' />
                <PageTransitionTitle>{ title }</PageTransitionTitle>
            </PageTransitionContent>
        </StyledPageTransition>
    )
};

export default _PageTransition;