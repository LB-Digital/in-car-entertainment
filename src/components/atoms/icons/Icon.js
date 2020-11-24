import * as React from 'react';
import styled from 'styled-components';


// *** styled ***
const StyledIcon = styled('svg')`
  width: ${({ width, size, theme: { iconSizes } }) => (width || (iconSizes[size || 'md']))};
  height: ${({ height }) => (height || null)};
  fill: ${({ theme: { colors } }) => colors.black};
`;


const Icon = ({ width, height, size, children, ...props }) => (
    <StyledIcon width={width} height={height} size={size} { ...props }>
        { children }
    </StyledIcon>
);

export default Icon;