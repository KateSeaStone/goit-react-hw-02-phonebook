import React, { Component } from 'react';
import './App.scss';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  contactFormSubmit = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    }
    //console.log(contact);

    const normalizedName = this.state.contacts.map(contact => contact.name.toLowerCase())

    if (normalizedName.includes(contact.name.toLowerCase())) {
      alert(`${contact.name} is already in contacts`)
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }))
    }
  };

  onDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value })
  }

  getFiltredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.includes(normalizedFilter))
  }

  render() {
    const { filter, contacts } = this.state;
    const filtredContacts = this.getFiltredContacts();

    return (

      <div className="container">
        <h1 className="main__title">Phonebook</h1>
        <ContactForm onSubmit={this.contactFormSubmit} />

        <h2 className="contacts__title">Contacts</h2>

        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={filtredContacts} onChange={this.onDelete} />

      </div>
    )

  };
}

export default App;
