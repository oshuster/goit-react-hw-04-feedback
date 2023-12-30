import { Component } from 'react';
import css from './feedbackForm.module.css';

class FeedbackForm extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    totalPositive: 0,
  };
  handleClick = ({ target: { name } }) => {
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  //виправити NaN при старті сторінки
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;

    return Math.ceil((good / total) * 100);
  };
  render() {
    return (
      <div className={css.container}>
        <h1 className={css.title}>Please leave feedback</h1>
        <div>
          <div className={css.button_wrapper}>
            <button
              className={css.button}
              onClick={this.handleClick}
              name="good"
            >
              Good
            </button>
            <button
              className={css.button}
              onClick={this.handleClick}
              name="neutral"
            >
              Neutral
            </button>
            <button
              className={css.button}
              onClick={this.handleClick}
              name="bad"
            >
              Bad
            </button>
          </div>
          <p className={css.statistics_title}>Statistics</p>
          <p className={css.result}>
            Good: <span>{this.state.good}</span>
          </p>
          <p className={css.result}>
            Neutral: <span>{this.state.neutral}</span>
          </p>
          <p className={css.result}>
            Bad: <span>{this.state.bad}</span>
          </p>
          <p className={css.result}>
            Total: <span>{this.countTotalFeedback()}</span>
          </p>
          <p className={css.result}>
            Positive feedback:{' '}
            <span>{this.countPositiveFeedbackPercentage()}%</span>
          </p>
        </div>
      </div>
    );
  }
}

export default FeedbackForm;
