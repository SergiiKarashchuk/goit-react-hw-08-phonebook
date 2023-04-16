import { useSelector } from 'react-redux';
import { filterListContacts } from 'redux/filrer/selectors';

import ContactItem from 'components/ContactListItem';
import { Item, List, Wrapper } from './ContactList.styled';

const ContactsList = () => {
  const filteredContacts = useSelector(filterListContacts);

  return (
    <Wrapper>
      {filteredContacts.length > 0 ? (
        <>
          <List>
            {filteredContacts.map(({ id, name, number }) => (
              <Item key={id}>
                <ContactItem id={id} name={name} number={number} />
              </Item>
            ))}
          </List>
        </>
      ) : (
        <b>No contact found</b>
      )}
    </Wrapper>
  );
};

export default ContactsList;
