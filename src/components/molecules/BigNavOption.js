import * as React from 'react';
import styled from 'styled-components';


/* components */
// atoms
import { Header2, Header3 } from '../atoms/document_sections';


/* styles */
// config
const RelNavOptionSize = 0.2;
const RelNavOptionSizeSmall = 0.12;

// styled components
const StyledBigNavOption = styled(
    React.forwardRef(
        (
            { small, ...props },
            ref
        ) => ( <div ref={ref} {...props} /> )
    ))`
  width: ${({ theme: { screenDimensions } }) => (screenDimensions.width * RelNavOptionSize)}px;
  height: ${({ small, theme: { screenDimensions } }) =>
    (screenDimensions.width * (
        small
            ? RelNavOptionSizeSmall
            : RelNavOptionSize
    ))}px;

  padding: ${({ theme: { spacing } }) => (spacing.md)};
`;


const BigNavOptionContent = styled(({ color, ...props }) => <div {...props} />)`
  width: 100%;
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  padding: ${({ theme: { spacing } }) => (spacing.md)};

  border-radius: ${({ theme: { borderRadius } }) => (borderRadius)};
  
  svg {
    fill: ${({ color }) => (color || '#fff')};
  }
`;

const BigNavOptionTitle = styled(({ small, color, ...props }) => (
    small
        ? <Header3 {...props} />
        : <Header2 {...props} />
))`
  margin-top: ${({ theme: { spacing } }) => spacing.md};

  text-transform: uppercase;
  text-align: center;
  color: ${({ color }) => (color || '#fff')};
`;


const _BigNavOption = ({ onClick, bGround, color, icon: Icon, title, small }) => {


    return (
        <StyledBigNavOption onClick={onClick} small={small}>
            <BigNavOptionContent style={{ backgroundColor: bGround }} color={color}>
                <Icon size='lg' />
                <BigNavOptionTitle small={small} color={color}>
                    { title }
                </BigNavOptionTitle>
            </BigNavOptionContent>
        </StyledBigNavOption>
    )
};

export default _BigNavOption;