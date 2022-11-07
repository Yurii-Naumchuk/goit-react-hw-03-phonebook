import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Forms, Input, Label, Button } from './Form.styled';

export class Form extends Component {
  state = {
    name: '',
    phone: '',
  };
  nameId = nanoid();
  phoneId = nanoid();
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { name, phone } = this.state;
    this.props.onSubmit({ name, phone });
    this.setState({
      name: '',
      phone: '',
    });
    console.log(name, phone);
  };
  render() {
    const { nameId, phoneId, handleSubmit, handleChange } = this;
    return (
      <Forms onSubmit={handleSubmit}>
        <Label htmlFor={nameId}>
          Name
          <Input
            id={nameId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            type="text"
            name="name"
            value={this.state.name}
            onChange={handleChange}
          />
        </Label>

        <Label htmlFor={phoneId}>
          Contact
          <Input
            id={phoneId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            type="tel"
            name="phone"
            value={this.state.phone}
            onChange={handleChange}
          />
        </Label>

        <Button>Add Contact</Button>
      </Forms>
    );
  }
}
