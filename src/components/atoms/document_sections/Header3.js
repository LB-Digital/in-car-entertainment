import styled from 'styled-components';


const Header3 = styled.h3`
  font-size: ${({ theme: { fontSizes } }) => (fontSizes.h3)};
  color: ${({ theme: { colors } }) => colors.black};
`;

export default Header3;