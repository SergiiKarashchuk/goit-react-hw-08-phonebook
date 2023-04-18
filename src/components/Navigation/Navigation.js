import { useAuth } from 'hooks';
import { Nav, Link } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts"> Contacts</Link>}
    </Nav>
  );
};

export default Navigation;
