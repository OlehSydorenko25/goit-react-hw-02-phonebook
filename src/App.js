import React, { Component } from 'react';
import Container from './Components/Container/Container'
import ContactForm from './Components/ContactForm/ContactForm'
import Filter from './Components/Filter/Filter'
import ContactList from './Components/ContactList/ContactList'

import './index.css'

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value
    })
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  addContact = ({name, number}, idContact) => {
    const contact = { id: idContact, name, number }

    const arrName = this.state.contacts.map( contact => contact.name)
      
    if (arrName.includes(name)) {
      alert (name + ' is already in contacts')
      return
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact]
    }))
  }

  render() {
    const { contacts, filter } = this.state

    const normalizedContacts = filter.toLowerCase()

    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedContacts))

    return (
      <Container>
        
        <h1>Phonebook</h1>

        <ContactForm onSubmit={this.addContact}/>

        <h2>Contacts</h2>

        <Filter value={filter} onChange={this.changeFilter}/>

        <ContactList contactList={visibleContacts} onDeleteContact={this.deleteContact}/>
        
      </Container>
    );
  }
}
 
export default App;

