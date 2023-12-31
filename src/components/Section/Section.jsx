import { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

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
    this.setState(
      prevState => ({ [name]: prevState[name] + 1 }),
      this.countTotalFeedback
    );
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    this.setState({ total: good + neutral + bad });
    this.countPositiveFeedbackPercentage();
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(({ good, total }) => ({
      totalPositive: Math.ceil((good / total) * 100),
    }));
  };
  render() {
    return (
      <div className={css.container}>
        <h1 className={css.title}>{this.props.title}</h1>
        <FeedbackOptions handleClick={this.handleClick} />
        {this.state.total ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positivePercentage={this.state.totalPositive}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}

export default Section;
