import { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Section from './Section';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  deleteContact = (ContactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== ContactId)
    }))
  }

  changeFilter = (evt) => {
    this.setState({ filter: evt.currentTarget.value })
  }

  filterContactsByName = () => {
    const { filter, contacts } = this.state;
    const normalizedStr = filter.toLocaleLowerCase();

    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedStr))
  }

  addContact = (name, number) => {
    const { contacts } = this.state;
    const contact = {
      id: nanoid(),
      name,
      number,
    }
    if (contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    )) {
      return alert(`${name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact]
      }))
    }
    console.log(contact);
  }


  render() {
    const { filter } = this.state;
    const visibleContacts = this.filterContactsByName();

    return (
      <div
        style={{
          fontSize: 30,
          color: '#010101'
        }}
      >
        <Section title="Phonebook">
          <ContactForm onSubmitAdd={this.addContact} />
</Section>
        <Section title="Contacts">
<Filter value={filter} onChange={this.changeFilter} />
          <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
        </Section>
          
      </div>
    );
  }

};

export default App;
