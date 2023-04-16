import { Helmet } from 'react-helmet';
import { useAuth } from 'hooks';
import ContactsBar from 'components/ContactsBar';

const Contacts = () => {
  const { isLoading } = useAuth();

  return (
    <div>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      {isLoading && <b>Request in progress...</b>}
      <ContactsBar />
    </div>
  );
};

export default Contacts;
