import React from 'react';
import { delete_button, contactItem } from './ContactsItem.module.css';
import { useDispatch } from 'react-redux';
import { contactsOperations } from '../../redux/phonebook';

const ContactsItem = ({ filtered }) => {
  const dispatch = useDispatch();

  return filtered.map(({ name, number, id }) => {
    return (
      <li key={id} name={name} className={contactItem}>
        <p>name: {name}</p>
        <p>tel.: {number}</p>
        <button
          type="button"
          className={delete_button}
          onClick={() => dispatch(contactsOperations.deleteContact(id))}
        ></button>
      </li>
    );
  });
};

export default ContactsItem;
