import css from './Button.module.css';

const FeedbackStats = props => {
  return (
    <button
      className={css.button}
      type={props.type}
      onClick={props.handleClick}
    >
      {props.text}
    </button>
  );
};

export default FeedbackStats;
