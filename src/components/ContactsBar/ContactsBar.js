import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { addContact, fetchContacts } from 'redux/contacts/operations';
import { selectContacts, selectIsLoading } from 'redux/contacts/selectors';

import ContactsForm from 'components/ContactsForm';
import ContactsList from 'components/ContactList';
import Filter from 'components/Filter';
import { Wrapper } from './ContactsBar.styled';

const ContactsBar = () => {
  const allContacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const notifiesAlert = (numberContact, nameContact) => {
    return toast.error(
      `${numberContact} is already in contacts under the name ${nameContact}.`
    );
  };

  const checkСontact = newNumber => {
    return allContacts.some(contact => contact.number === newNumber);
  };

  const onSubmit = (name, number) => {
    if (checkСontact(number)) {
      return notifiesAlert(number, name);
    }

    dispatch(addContact({ name, number }));
    toast.success(`Contact ${name} added successfully`);
  };

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactsForm onSubmit={onSubmit} />

      <h2>Contacts</h2>

      {!isLoading && allContacts.length === 0 && <p>Contacts list is empty</p>}

      {!isLoading && allContacts.length > 0 && (
        <>
          <Filter />
          <ContactsList />
        </>
      )}
    </Wrapper>
  );
};

export default ContactsBar;
