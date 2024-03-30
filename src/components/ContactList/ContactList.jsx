import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import css from './ContactList.module.css';
import { deleteContact, fetchContacts } from 'store/operations';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'store/selectors';
import { useEffect } from 'react';

const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <>
      {isLoading && <p className={css.loading}>Loading...</p>}
      {error && <p className={css.error}>{error}</p>}
      {!isLoading && !error && (
        <ul className={css.list}>
          {visibleContacts.map(item => {
            return (
              <li className={css.item} key={item.id}>
                <span className={css['item-text']}>
                  {item.name}: {item.phone}
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
      )}
    </>
  );
};

export default ContactList;
