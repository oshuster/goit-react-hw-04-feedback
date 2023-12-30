// import FeedbackForm from './FeedbackForm/FeedbackForm';
// import Statistics from './Statistics/Statistics';
// import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave feefback" />
    </div>
  );
};
