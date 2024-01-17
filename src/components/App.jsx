import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import Section from './Section/Section';
import { useState } from 'react';

import css from './app.module.css';

function App() {
  const [feedback, setfeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = option => {
    setfeedback(prevState => ({
      ...feedback,
      [option]: prevState[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    if (!totalFeedback) {
      return 0;
    }
    return Math.ceil((feedback.good / totalFeedback) * 100);
  };

  const buttonList = Object.keys(feedback);

  const { good, bad, neutral } = feedback;

  return (
    <div className={css.container}>
      <Section title="Please leave feefback">
        <FeedbackOptions
          options={buttonList}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={'0'}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

export default App;
