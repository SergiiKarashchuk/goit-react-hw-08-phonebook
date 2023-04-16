import { AuthLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <div>
      <AuthLink to="/register">Register</AuthLink>
      <AuthLink to="/login">Log in</AuthLink>
    </div>
  );
};

export default AuthNav;
