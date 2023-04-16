import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { addContact, fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';

import ContactsForm from 'components/ContactsForm';
import ContactsList from 'components/ContactList';
import Filter from 'components/Filter';
import { Message, Title, Wrapper, Text } from './ContactsBar.styled';

const ContactsBar = () => {
  const allContacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const error = useSelector(selectError);

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
      <Title>Phonebook</Title>
      <ContactsForm onSubmit={onSubmit} />

      <Text>Your contacts</Text>

      {isLoading && !error && <b>Request in progress...</b>}

      {!isLoading && allContacts.length === 0 && (
        <Message>Contacts list is empty</Message>
      )}
      {allContacts.length > 0 && (
        <>
          <Filter />
          <ContactsList />
        </>
      )}
    </Wrapper>
  );
};

export default ContactsBar;
