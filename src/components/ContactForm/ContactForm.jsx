import Input from '../Input/Input';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'store/contactsSlice/slice';
import { nanoid } from '@reduxjs/toolkit';
import { selectContacts } from 'store/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const isNameExist = name => {
    if (!contacts) {
      return false;
    }
    return contacts.find(contact => contact.name === name);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const target = e.target;
    const name = target.elements.name.value;

    if (isNameExist(name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const number = target.elements.number.value;

    dispatch(
      addContact({
        id: nanoid(),
        name,
        number,
      })
    );

    target.elements.name.value = '';
    target.elements.number.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        id="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        label="Name"
      />
      <Input
        type="tel"
        id="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        label="Number"
      />
      <Button type="submit" text="add contact" />
    </form>
  );
};

export default ContactForm;
