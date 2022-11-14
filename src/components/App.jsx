import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Form } from './Form/Form';
import { FilterContact } from './FilterContact/FilterContact';
import { Block } from './App.styled';

export class App extends Component {
  state = {
    contact: [],
    filter: '',
  };

  componentDidMount() {
    const contact = JSON.parse(localStorage.getItem('contact'));
    if (contact?.length) {
      this.setState({ contact });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contact } = this.state;
    if (prevState.contact !== contact) {
      localStorage.setItem('contact', JSON.stringify(contact));
    }
  }

  addContact = data => {
    if (this.isDublicate(data)) {
      return alert(`${data.name} -   is already in Phonebook List`);
    }
    this.setState(prev => {
      const newContact = {
        id: nanoid(),
        ...data,
      };
      return {
        contact: [...prev.contact, newContact],
      };
    });
  };

  removeContact = id => {
    this.setState(prev => {
      const newContact = prev.contact.filter(item => item.id !== id);
      return {
        contact: newContact,
      };
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  isDublicate({ name, phone }) {
    const { contact } = this.state;
    const result = contact.find(
      item => item.name === name && item.phone === phone
    );
    return result;
  }

  getFilterContacts() {
    const { contact, filter } = this.state;

    if (!filter) {
      return contact;
    }
    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContact = contact.filter(({ name }) => {
      const normalizedName = name.toLocaleLowerCase();
      const result = normalizedName.includes(normalizedFilter);
      return result;
    });
    return filteredContact;
  }
  
  render() {
    const { addContact, handleChange, removeContact } = this;

    const contact = this.getFilterContacts();
    return (
      <>
        <Block>
          <Form onSubmit={addContact} />
        </Block>

        <FilterContact handleChange={handleChange} />
        <ContactList items={contact} removeContact={removeContact} />
      </>
    );
  }
}
