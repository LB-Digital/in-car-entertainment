import * as React from 'react';
import styled from 'styled-components';


/* components */
// atoms
import { Text } from '../grouping_content';


/* styled */
const _Strong = styled(props => <Text {...props} />)`
  font-weight: ${({ theme: { fontWeights } }) => (fontWeights.bold)};
`;


export default _Strong;