import { useEffect } from 'react';
import Form from './Form';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { addContact, fetchContacts } from 'redux/operations';
import { AppBox } from './App.styled';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactsList from './ContactsList';
import Filter from './Filter';
import { useDispatch, useSelector } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  function notifiesAlert(numberContact, nameContact) {
    return toast.error(
      `${numberContact} is already in contacts under the name ${nameContact}.`
    );
  }

  function checkСontact(newNumber) {
    return contacts.some(contact => contact.phone === newNumber);
  }

  function onSubmit(name, phone) {
    if (checkСontact(phone)) {
      return notifiesAlert(phone, name);
    }

    dispatch(addContact({ name, phone }));
    toast.success(`Contact ${name} added successfully`);
  }

  return (
    <AppBox>
      <ToastContainer autoClose={2000} position="top-center" />
      <h1>Phonebook</h1>
      <Form onSubmit={onSubmit} />
      <h2>Contacts</h2>
      {isLoading && !error && <b>Request in progress...</b>}
      {contacts.length !== 0 && (
        <>
          <Filter />
          <ContactsList />
        </>
      )}

      {/* 
      {!isLoading && contacts.length === 0 && <p>Contacts list is empty</p>} */}
      {error && <p>Something went wrong, please try again later</p>}
    </AppBox>
  );
}
