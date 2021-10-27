import './App.css';
import Header from './components/Header'

const App = () => {

  const programs = [
    {
      id: 1,
      content: 'JuiJitsu Fundamentals',
      time: '5:00 PM - 6:00 PM',
      days: 'Mondays and Wednesdays'
    },
    {
      id: 2,
      content: 'Muay Thai (Thai Boxing)',
      time: '6:00 PM - 7:30 PM',
      days: 'Mondays and Wednesdays'
    },
    {
      id: 3,
      content: 'Kids JuiJitsu',
      time: '5:00 PM - 6:30 PM',
      days: 'Tuesdays and Thursdays'
    },
    {
      id: 4,
      content: 'Advanced JuiJitsu',
      time: '6:30 PM - 8:00 PM',
      days: 'Tuesdays and Thursdays'
    },
    {
      id: 5,
      content: 'Kids Muay Thai (Thai Boxing)',
      time: '5:00 PM - 6:00 PM',
      days: 'Fridays'
    },
    {
      id: 6,
      content: 'Mixed Martial Arts',
      time: '6:00 PM - 7:00 PM',
      days: 'Fridays'
    },
  ]

  return (
    <div className="container">
      <Header
      title='Martial Arts: JuiJitsu and Thai Boxing' />
    </div>
  );
}

export default App;
