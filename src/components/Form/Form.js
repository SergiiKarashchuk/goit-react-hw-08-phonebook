import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import PropTypes from 'prop-types';
import { FormBox, InputName, InputTel, Button } from './Form.styled';

const initialValues = {
  name: '',
  phone: '',
};

const userSchema = object({
  name: string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  phone: string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export default function ContactForm({ onSubmit }) {
  function handleSubmit({ name, phone }, { resetForm }) {
    onSubmit(name, phone);
    resetForm();
  }

  return (
    <Formik
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
          <InputTel type="tel" name="phone" />
          <ErrorMessage name="phone" />
        </label>
        <Button type="submit">Add contact</Button>
      </FormBox>
    </Formik>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
