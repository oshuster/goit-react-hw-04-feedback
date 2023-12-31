import Section from './Section/Section';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 40,
        color: '#010101',
        maxWidth: '400px',
        padding: '10px',
      }}
    >
      <Section title="Please leave feefback" />
    </div>
  );
};
