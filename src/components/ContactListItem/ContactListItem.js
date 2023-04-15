import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { AiOutlineDelete } from 'react-icons/ai';

import {
  Button,
  ContactInfo,
  Spinner,
  Name,
  Number,
  UserIcon,
} from './ContactListItem.styled';

const ContactsListItem = ({ contact }) => {
  const [contactId, setContactId] = useState(null);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const error = useSelector(selectError);

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    setContactId(contact.id);

    if (!error) {
      toast.success(`Contact ${contact.name} successfully deleted`);
    }
  };
  return (
    <>
      <UserIcon />
      <ContactInfo>
        <Name>{contact.name}</Name>
        <Number>{contact.phone}</Number>
      </ContactInfo>

      {isLoading && contactId === contact.id ? (
        <Spinner size={40} />
      ) : (
        <Button type="button" onClick={handleDelete} disabled={isLoading}>
          <AiOutlineDelete size={30} />
        </Button>
      )}
    </>
  );
};

ContactsListItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactsListItem;
