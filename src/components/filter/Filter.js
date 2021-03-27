import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/phonebook/phonebook-actions';
import { contactsSelectors } from '../../redux/phonebook';
import { inputForm } from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFiltered);

  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
        className={inputForm}
      ></input>
    </>
  );
};

export default Filter;
