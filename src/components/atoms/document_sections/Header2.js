import styled from 'styled-components';


const Header2 = styled.h2`
  font-size: ${({ theme: { fontSizes } }) => (fontSizes.h2)};
  color: ${({ theme: { colors } }) => colors.black};
`;

export default Header2;