import css from './statistics.module.css';

function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;

  return (
    <>
      <p className={css.result}>
        Good: <span>{good}</span>
      </p>
      <p className={css.result}>
        Neutral: <span>{neutral}</span>
      </p>
      <p className={css.result}>
        Bad: <span>{bad}</span>
      </p>
      <p className={css.result}>
        Total: <span>{total}</span>
      </p>
      <p className={css.result}>
        Positive feedback: <span>{positivePercentage}%</span>
      </p>
    </>
  );
}

export default Statistics;
