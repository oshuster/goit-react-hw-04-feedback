import { Component } from 'react';
import css from './feedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
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
