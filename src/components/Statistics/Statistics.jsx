import { Component } from 'react';
import css from './statistics.module.css';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <>
        <p className={css.statistics_title}>Statistics</p>
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
}

export default Statistics;
