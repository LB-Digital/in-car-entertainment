import * as React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';


/* config */
import * as ROUTES from '../../config/routes';


/* components */
// atoms
import { MicrophoneIcon, SearchLocationIcon } from '../../components/atoms/icons/solid';
// molecules
import { ScreenKeyboard } from '../../components/molecules';
// organisms
import { NavVerticalNav } from '../../components/organisms';


/* styles */
// styled components
const StyledNavSearchPage = styled('div')`
  flex: 1;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  padding: ${({ theme: { spacing } }) => spacing.sm};
  
  background: ${({ theme: { colors } }) => colors.pages.nav};
`;

const NavSearchContent = styled('div')`
  flex: 1;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SearchBarContainer = styled('div')`
  flex: 1;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SearchBar = styled('div')`
  width: 50%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  padding: ${({ theme: { spacing } }) => spacing.md};
  
  background: ${({ theme: { colors } }) => colors.screenBackground};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
`;

const SearchBarInput = styled('input')`
  flex: 1;
  
  margin: ${({ theme: { spacing } }) => spacing.md};
  padding: ${({ theme: { spacing } }) => spacing.sm};
  
  background: ${({ theme: { colors } }) => colors.white};
  color: ${({ theme: { colors } }) => colors.dark};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  border: none;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.h3};
`;



const _NavSearchPage = () => {

    /* hooks */
    // react-router-dom
    const history = useHistory();


    /* hooks:state */
    // search value
    const [ value, setValue ] = React.useState('');

    // mic input status
    const [ micActive, setMicActive ] = React.useState(false);


    /* UI Handlers */
    // change value
    const handleChangeKeyboard = (val) =>
        setValue(val);

    // change mic active
    const handlePressMic = () =>
        setMicActive(!micActive);

    // handle press search
    const handlePressSearch = () =>
        history.push(ROUTES.NAV.HOME);


    /* render */
    return (
        <StyledNavSearchPage>
            <NavVerticalNav/>

            <NavSearchContent>
                <SearchBarContainer>
                    <SearchBar>
                        <MicrophoneIcon size='sm' onClick={handlePressMic} />
                        <SearchBarInput value={value} readOnly />
                        <SearchLocationIcon size='sm' onClick={handlePressSearch} />
                    </SearchBar>
                </SearchBarContainer>

                <ScreenKeyboard onChange={handleChangeKeyboard} isMicActive={micActive} />
            </NavSearchContent>
        </StyledNavSearchPage>
    )
};

export default _NavSearchPage;