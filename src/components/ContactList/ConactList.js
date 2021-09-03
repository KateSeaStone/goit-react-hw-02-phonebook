import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';
import './ContactList.scss'


const ContactList = ({ contacts, onChange}) => {
  return (
    <ul className="contactList">
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onChange={contact.onDelete}
        />
      ))}



    </ul>
  )
}

ContactList.propTypes = {

};

export default ContactList;

