import * as React from 'react';
import styled from 'styled-components';


// *** styled ***
const StyledText = styled('p')`
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.medium};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.p};
`;


const _Text = (props) => (
    <StyledText {...props} />
);

export default _Text;