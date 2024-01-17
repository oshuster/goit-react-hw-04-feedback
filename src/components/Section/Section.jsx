import css from './section.module.css';

function Section({ title, children }) {
  return (
    <section>
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  );
}

export default Section;
