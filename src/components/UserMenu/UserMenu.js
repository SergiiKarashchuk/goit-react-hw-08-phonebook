import { useDispatch } from 'react-redux';

import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { UserName, Wrapper, Button, Avatar } from './UserMenu.styled';
import { CiLogout } from 'react-icons/ci';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const onLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Wrapper>
      <UserName>
        <Avatar
          width={40}
          height={40}
          src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
          alt="user avatar"
        />
        Welcome, {user.email}
      </UserName>
      <Button type="button" onClick={onLogOut}>
        <CiLogout size={25} />
      </Button>
    </Wrapper>
  );
};

export default UserMenu;
