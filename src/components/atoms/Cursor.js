import * as React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';


const Cursor = styled(({ posX, posY, ...props }) => (<div {...props} />))`
  position: absolute;
  
  width: 30px;
  height: 30px;
  transform: translate(-50%, -50%);
  
  pointer-events: none;
  background: ${({ theme: { colors } }) => (transparentize(0.5, colors.pageBackground))};
  border-radius: 50%;
`;

export default Cursor;