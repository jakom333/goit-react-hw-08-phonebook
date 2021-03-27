import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/contactForm/ContactForm';
import ContactsItem from '../../components/ContactsItem/ContactsItem';
import Filter from '../../components/filter/Filter';
import { contactsSelectors, contactsOperations } from '../../redux/phonebook';
import {
  container,
  formTitle,
  contactsCont,
  contactsList,
} from './Contacts.module.css';

const Contacts = () => {
  const contacts = useSelector(contactsSelectors.getFilteredContacts);
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);
  const error = useSelector(contactsSelectors.getErrorMessage);
  const isContactIncludes = useSelector(
    state => state.contacts.items.length > 0,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <div className={container}>
      <h2 className={formTitle}>Phonebook</h2>
      <ContactForm />
      {error && <p className="error-message">{error}</p>}
      {isLoadingContacts && (
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      )}
      {isContactIncludes && (
        <div className={contactsCont}>
          <h2 className={formTitle}>Contacts</h2>
          <Filter />
          <ul className={contactsList}>
            <ContactsItem filtered={contacts} />
          </ul>
        </div>
      )}
    </div>
  );
};

export default Contacts;
