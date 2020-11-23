import styled from 'styled-components';


const Header1 = styled.h1`
  font-size: ${({ theme: { fontSizes } }) => (fontSizes.h1)};
`;

export default Header1;