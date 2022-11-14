import PropTypes from 'prop-types';
import React from 'react';
import { Ul, Li, Button } from './ContactList.styled';

export function ContactList({ items, removeContact }) {
  const elements = items.map(({ name, phone, id }) => {
    return (
      <Li key={id}>
        Name :{name} Phone :{phone}
        <Button onClick={() => removeContact(id)}>Delete</Button>
      </Li>
    );
  });
  return <Ul>{elements}</Ul>;
}

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  removeContact: PropTypes.func.isRequired,
};
