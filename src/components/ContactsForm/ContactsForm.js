import { ErrorMessage } from 'formik';
import { object, string } from 'yup';
import PropTypes from 'prop-types';
import {
  FormBox,
  InputName,
  InputTel,
  Button,
  FormikWrapper,
} from './ContactsForm.styled';

const initialValues = {
  name: '',
  number: '',
};

const userSchema = object({
  name: string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

const ContactsForm = ({ onSubmit }) => {
  function handleSubmit({ name, number }, { resetForm }) {
    onSubmit(name, number);
    resetForm();
  }

  return (
    <FormikWrapper
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <FormBox autoComplete="off">
        <label>
          <span>Name</span>
          <InputName type="text" name="name" />
          <ErrorMessage name="name" />
        </label>
        <label>
          <span>Tel</span>
          <InputTel type="tel" name="number" />
          <ErrorMessage name="number" />
        </label>
        <Button type="submit">Add contact</Button>
      </FormBox>
    </FormikWrapper>
  );
};

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactsForm;
