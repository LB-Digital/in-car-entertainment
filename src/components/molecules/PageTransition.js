import * as React from 'react';
import styled from 'styled-components';


/* components */
// atoms
import { Header2 } from '../atoms/document_sections';


/* styles */
// styled components
const StyledPageTransition = styled(
    React.forwardRef((props, ref) => (
        <div ref={ref} {...props} />
    )))`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  
  
  &.page-transition-enter {
    background: transparent;
    
    width: 0;
    height: 0;
    
    border-radius: 50%;
    opacity: 0;
  }
  
  &.page-transition-enter-active {
    background: ${({ color }) => color};
    
    width: ${({ theme: { screenDimensions, spacing } }) => (screenDimensions.width - (spacing.raw.md * 2))}px;
    height: ${({ theme: { screenDimensions, spacing } }) => (screenDimensions.height - (spacing.raw.md * 2))}px;
    
    border-radius: ${({ theme: { borderRadius } }) => borderRadius};
    opacity: 1;
    
    transition: all 200ms;
  }
  
  &.page-transition-exit {
    background: ${({ color }) => color};
    
    width: ${({ theme: { screenDimensions, spacing } }) => (screenDimensions.width - (spacing.raw.md * 2))}px;
    height: ${({ theme: { screenDimensions, spacing } }) => (screenDimensions.height - (spacing.raw.md * 2))}px;
    
    border-radius: ${({ theme: { borderRadius } }) => borderRadius};
    opacity: 1;
  }
  
  &.page-transition-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
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


const _PageTransition = ({ color, title, icon: Icon }) => {


    /* render */
    return (
        <StyledPageTransition color={color}>
            <PageTransitionContent>
                <Icon size='lg' />
                <PageTransitionTitle>{ title }</PageTransitionTitle>
            </PageTransitionContent>
        </StyledPageTransition>
    )
};

export default _PageTransition;