import css from './Input.module.css';

const Input = props => {
  return (
    <>
      <label className={css.label} htmlFor={props.id}>
        {props.label}
      </label>
      <input
        className={css.input}
        type={props.type}
        id={props.id}
        pattern={props.pattern}
        title={props.title}
        onChange={props.onChange}
        required
      />
    </>
  );
};

export default Input;
