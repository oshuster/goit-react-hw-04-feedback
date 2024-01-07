import { Component } from 'react';

import css from './feedbackOptions.module.css';

// class FeedbackOptions extends Component {
//   render() {
//     const { options } = this.props;
//     const buttons = options.map(options => (
//       <button
//         key={options}
//         className={`${css.button} ${css.button_title}`}
//         onClick={this.props.onLeaveFeedback}
//         name={options}
//       >
//         {options}
//       </button>
//     ));

//     return <div className={css.button_wrapper}>{buttons}</div>;
//   }
// }
class FeedbackOptions extends Component {
  render() {
    const { options } = this.props;
    const buttons = options.map(options => (
      <button
        key={options}
        className={`${css.button} ${css.button_title}`}
        onClick={() => this.props.onLeaveFeedback(options)}
        name={options}
      >
        {options}
      </button>
    ));

    return <div className={css.button_wrapper}>{buttons}</div>;
  }
}

export default FeedbackOptions;
