import * as React from 'react';
import styled from 'styled-components';


/* assets */
// images
import avatar0 from '../../assets/img/avatar_0.jpeg';
import avatar1 from '../../assets/img/avatar_1.jpeg';


/* components */
// atoms
import { Header3 } from '../atoms/document_sections';
import { Text } from '../atoms/grouping_content';


/* styled */
// config
const RelSwitcherWidth = 0.15;
const RelAvatarSize = 0.035;

// components
const UserSwitcherWrapper = styled('div')`
  position: relative;
  
  width: ${({ theme: { screenDimensions } }) => (screenDimensions.width * RelSwitcherWidth)}px;
`;

const UserDisplay = styled(({ addSpacing, highlight, ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  padding: ${({ addSpacing, theme: { spacing } }) => (addSpacing ? spacing.sm : null)};
  
  background: ${({ highlight, theme: { colors } }) => (highlight ? colors.dark : null)};
`;

const UserDisplayText = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Avatar = styled('div')`
  width: ${({ theme: { screenDimensions } }) => (screenDimensions.width * RelAvatarSize)}px;
  height: ${({ theme: { screenDimensions } }) => (screenDimensions.width * RelAvatarSize)}px;
  
  margin-right: ${({ theme: { spacing } }) => spacing.sm};

  background-image: url(${({ src }) => src});
  background-size: cover;
  border-radius: ${({ theme: { borderRadius } }) => (borderRadius)};
`;

const UserSwitchDropdown = styled('div')`
  position: absolute;
  top: -${({ theme: { spacing } }) => (spacing.sm)};
  left: -${({ theme: { spacing } }) => (spacing.sm)};
  overflow: hidden;
  
  width: 100%;
  
  background: rgba(0, 0, 0, 0.8);
  border-radius: ${({ theme: { borderRadius } }) => (borderRadius)};
  box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.3);
  color: #fff;
`;


/* components/molecules/UserSwitcher */
const USERS = {
    'USER_0': {
        avatar: avatar0,
        name: 'Lucas'
    },
    'USER_1': {
        avatar: avatar1,
        name: 'Holly'
    },
    // 'USER_2': {
    //     avatar: avatar0,
    //     name: 'Alex'
    // }
};

const UserSwitcher = () => {
    // state
    const [ activeUser, setActiveUser ] = React.useState('USER_0');
    const [ dropdownOpen, setDropdownOpen ] = React.useState(false);

    // UI event handlers
    const handlePressUser = (userId) => {
        setActiveUser(userId);
        setDropdownOpen(false);
    };

    React.useEffect(() => {
        const handlePressDoc = (ev) => {
            if (!ev.target.closest('.user-switch-dropdown') && dropdownOpen)
                setDropdownOpen(false);
        };

        document.addEventListener('click', handlePressDoc);

        return () => {
            document.removeEventListener('click', handlePressDoc);
        }
    });


    const user = USERS[activeUser];

    return (
        <UserSwitcherWrapper>
            <UserDisplay onClick={() => setDropdownOpen(true)}>
                <Avatar src={user.avatar} />
                <Header3>{ user.name }</Header3>
            </UserDisplay>


            {dropdownOpen && (
                <UserSwitchDropdown className='user-switch-dropdown'>
                    <UserDisplay
                        addSpacing={true}
                        highlight={true}
                        onClick={() => setDropdownOpen(false)}
                    >
                        <Avatar src={ user.avatar } />
                        <UserDisplayText>
                            <Header3>{ user.name }</Header3>
                        </UserDisplayText>
                    </UserDisplay>
                    {
                        Object.keys(USERS).map((userId) => {
                            if (userId === activeUser)
                                return null;

                            const user = USERS[userId];
                            return (
                                <UserDisplay key={userId} addSpacing={true} onClick={() => handlePressUser(userId)}>
                                    <Avatar src={user.avatar} />
                                    <UserDisplayText>
                                        <Header3>{ user.name }</Header3>
                                        <Text>Switch to User</Text>
                                    </UserDisplayText>
                                </UserDisplay>
                            )
                        })
                    }
                </UserSwitchDropdown>
            )}
        </UserSwitcherWrapper>
    )
};

export default UserSwitcher;