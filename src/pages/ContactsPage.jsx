// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';

// import { selectError, selectIsLoading } from '../redux/contacts/selectors';
// import { fetchContacts } from '../redux/contacts/operations';
// import ContactForm from '../components/ContactForm/ContactForm';
// import SearchBox from '../components/SearchBox/SearchBox';
// import ContactList from '../components/ContactList/ContactList';

// export const ContactsPage = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <>
//       <h2>Phonebook</h2>
//       <ContactForm />
//       {isLoading && !error && (
//         <b style={{ color: 'green' }}>Request in progress...</b>
//       )}
//       <SearchBox />
//       <ContactList />
//     </>
//   );
// };

const ContactsPage = () => {
  return (
    <div>
      <p>ContactsPage</p>
    </div>
  );
};

export default ContactsPage;
