import css from './feedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  const buttons = options.map(options => (
    <button
      key={options}
      className={`${css.button} ${css.button_title}`}
      onClick={() => onLeaveFeedback(options)}
      name={options}
    >
      {options}
    </button>
  ));

  return <div className={css.button_wrapper}>{buttons}</div>;
}

export default FeedbackOptions;
