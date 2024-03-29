import { useDispatch } from 'react-redux';
import Input from '../Input/Input';
import { updateFilter } from 'store/filterSlice/slice';

const Filter = props => {
  const dispatch = useDispatch();

  return (
    <form onSubmit={props.onSubmit}>
      <Input
        type="text"
        id="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        label="Find contacts by name"
        onChange={e => dispatch(updateFilter(e.target.value))}
      />
    </form>
  );
};

export default Filter;
