import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import css from './ContactList.module.css';
import { deleteContact } from 'store/contactsSlice/slice';
import { selectContacts, selectFilter } from 'store/selectors';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  function filterContacts() {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }

  const filteredContacts = filterContacts();

  return (
    <ul className={css.list}>
      {filteredContacts.map(item => {
        return (
          <li className={css.item} key={item.id}>
            <span className={css['item-text']}>
              {item.name}: {item.number}
            </span>
            <Button
              type="button"
              text="Delete"
              handleClick={() => {
                dispatch(deleteContact(item.id));
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
