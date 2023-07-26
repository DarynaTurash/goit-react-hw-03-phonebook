import { Component } from 'react';
import React from 'react';
import { ContactList } from './contactList/contactList';
import { ContactForm } from './contactForm/contactForm';
import { Layout } from './layout/layout';
import { Filter } from './filter/filter';

const LS_KEY = "contacts-phonebook";

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  }

  componentDidMount() {
    const contacts = localStorage.getItem(LS_KEY);

    if(contacts && Array.isArray(JSON.parse(contacts)) && JSON.parse(contacts).length > 0) {
      this.setState({
        contacts: JSON.parse(contacts),
      })
    }
  };

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    };
  };

  handleSubmit = newContact => {
    const { name } = newContact;
    const contactExists = this.state.contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
    
    if(contactExists) {
      alert(`${newContact.name} is already in contact`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
        number: newContact.number,
      }));
    }
    };

  handleFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    })
  };

  handleContactDelete = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    })
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const filterNormalized = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(filterNormalized));
  };


  render() {
    const visibleContacts = this.getVisibleContacts();
    const { filter } = this.state;

    return (
    <Layout>
    <h1>Phonebook</h1>
    <ContactForm onSave={this.handleSubmit} />
    <h2>Contacts</h2>
    <Filter onChange={this.handleFilter} value={filter} />
    <ContactList contacts={visibleContacts} onDelete={this.handleContactDelete} />
    </Layout>
    );
  };
}
