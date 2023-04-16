import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  FormBox,
  InputEmail,
  InputPassword,
  Button,
  FormikWrapper,
} from './LoginForm.styled';
import { ErrorMessage } from 'formik';
import { object, string } from 'yup';

const initialValues = {
  email: '',
  password: '',
};

const userSchema = object({
  email: string().required(),
  password: string().required(),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    const contact = { email, password };
    console.log(contact);
    dispatch(logIn({ email, password }));
    resetForm();
  };

  return (
    <FormikWrapper
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
    </FormikWrapper>
  );
};

export default LoginForm;
