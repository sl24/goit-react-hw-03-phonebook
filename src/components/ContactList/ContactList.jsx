import PropTypes from 'prop-types';

import { List, ListItem, Button } from './ContactListStyles';

const ContactListItem = ({ name, phone, onRemove }) => {
  return (
    <ListItem>
      {name}: {phone} <Button onClick={onRemove}>Delete</Button>
    </ListItem>
  );
};

const ContactList = ({ contacts, onRemove }) => {
  if (contacts.length === 0) return null;
  return (
    <List>
      {contacts.map(({ id, name, phone }) => (
        <ContactListItem
          key={id}
          name={name}
          phone={phone}
          onRemove={() => onRemove(id)}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string,
    }),
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactList;
