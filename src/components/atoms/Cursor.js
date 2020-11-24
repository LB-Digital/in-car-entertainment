import styled from 'styled-components';
import { transparentize } from 'polished';


const Cursor = styled('div')`
  position: absolute;
  
  width: ${({ theme: { cursor } }) => (cursor.size)};
  height: ${({ theme: { cursor } }) => (cursor.size)};
  transform: translate(-50%, -50%);
  
  pointer-events: none;
  background: ${({ theme: { colors } }) => (transparentize(0.5, colors.pageBackground))};
  border-radius: 50%;
  z-index: 999;
`;

export default Cursor;