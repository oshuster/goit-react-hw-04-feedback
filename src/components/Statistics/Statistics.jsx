import { Component } from 'react';
import css from './statistics.module.css';

class Statistics extends Component {
  // handleClick = ({ target: { name } }) => {
  //   this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  // };
  // countTotalFeedback = () => {
  //   const { good, neutral, bad } = this.state;
  //   return good + neutral + bad;
  // };
  // //виправити NaN при старті сторінки
  // countPositiveFeedbackPercentage = () => {
  //   const total = this.countTotalFeedback();
  //   const { good } = this.state;

  //   return Math.ceil((good / total) * 100);
  // };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div className={css.container}>
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
          Total: <span>0</span>
        </p>
        <p className={css.result}>
          Positive feedback:
          <span>0%</span>
        </p>
      </div>
    );
  }
}

export default Statistics;
