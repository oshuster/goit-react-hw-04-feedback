import { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';

import css from './section.module.css';

class Section extends Component {
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
    console.log(this.state);
    return (
      <div className={css.container}>
        <h1 className={css.title}>{this.props.title}</h1>
        <FeedbackOptions handleClick={this.handleClick} />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positivePercentage={this.state.totalPositive}
          countTotalFeedback={this.countTotalFeedback}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
        />
      </div>
    );
  }
}

export default Section;
