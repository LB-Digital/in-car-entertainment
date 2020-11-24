import styled from 'styled-components';


const Header1 = styled.h1`
  font-size: ${({ theme: { fontSizes } }) => (fontSizes.h1)};
  color: ${({ theme: { colors } }) => colors.black};
`;

export default Header1;