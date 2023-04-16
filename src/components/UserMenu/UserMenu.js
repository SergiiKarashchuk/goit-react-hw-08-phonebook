import { useDispatch } from 'react-redux';

import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { UserName, Wrapper } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const onLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Wrapper>
      <UserName>Welcome, {user.email}</UserName>
      <button type="button" onClick={onLogOut}>
        LogOut
      </button>
    </Wrapper>
  );
};

export default UserMenu;
