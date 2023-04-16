import { Helmet } from 'react-helmet';
import { useAuth } from 'hooks';
import ContactsBar from 'components/ContactsBar';

const Contacts = () => {
  const { isLoading } = useAuth();

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      {isLoading && <b>Request in progress...</b>}
      <ContactsBar />
    </>
  );
};

export default Contacts;
