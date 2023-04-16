import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  ErrorMessageText,
  Container,
  Label,
  Text,
  Input,
  FormBox,
  SubmitButton,
  Title,
} from './LoginForm.styled';
import { ErrorMessage } from 'formik';
import { object, string } from 'yup';

const initialValues = {
  email: '',
  password: '',
};

const userSchema = object({
    email: string().email('Invalid email').required('Email is required'),
    password: string().required('Password is required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(logIn({ email, password }));
    resetForm();
  };

  return (
    <Container>
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <FormBox autoComplete="off">
        <label>
          <span>Email</span>
          <InputEmail type="text" name="email" />
          <ErrorMessage name="email" />
        </label>
        <label>
          <span>Password</span>
          <InputPassword type="password" name="password" />
          <ErrorMessage name="password" />
        </label>
        <Button type="submit">Log In</Button>
      </FormBox>
    </Formik>
    </Container>
  );
};

export default LoginForm;
