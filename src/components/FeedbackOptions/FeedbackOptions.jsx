import { Component } from 'react';
import css from './feedbackOptions.module.css';

class FeedbackOptions extends Component {
  // handleClick = ({ target: { name } }) => {
  //   console.log(name);
  //   console.log(this.state);
  //   // this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  // };
  // countTotalFeedback = () => {
  //   const { good, neutral, bad } = this.state;
  //   return good + neutral + bad;
  // };
  //виправити NaN при старті сторінки
  // countPositiveFeedbackPercentage = () => {
  //   const total = this.countTotalFeedback();
  //   const { good } = this.state;

  //   return Math.ceil((good / total) * 100);
  // };

  render() {
    // console.log(this.props.handleClick);
    return (
      <div className={css.button_wrapper}>
        <button
          className={css.button}
          onClick={this.props.handleClick}
          name="good"
        >
          Good
        </button>
        <button
          className={css.button}
          onClick={this.props.handleClick}
          name="neutral"
        >
          Neutral
        </button>
        <button
          className={css.button}
          onClick={this.props.handleClick}
          name="bad"
        >
          Bad
        </button>
      </div>
    );
  }
}

export default FeedbackOptions;
