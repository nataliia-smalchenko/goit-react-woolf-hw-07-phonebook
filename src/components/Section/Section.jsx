import css from './Section.module.css';

const Section = props => {
  return (
    <section>
      <h2 className={css.title}>{props.title}</h2>
      {props.children}
    </section>
  );
};

export default Section;
