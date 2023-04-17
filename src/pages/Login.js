import LoginForm from 'components/LoginForm';
import { useAuth, useLoaders } from 'hooks';
const { Helmet } = require('react-helmet');

const Login = () => {
  const { isLoading } = useAuth();
  const { LoaderBig } = useLoaders();

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      {isLoading && <LoaderBig />}
      <LoginForm />
    </>
  );
};

export default Login;
