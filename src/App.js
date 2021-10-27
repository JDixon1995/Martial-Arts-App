import './App.css';
import Header from './components/Header'
import Programs from './components/Programs'
import Mission from './components/Mission'

const App = () => {

  

  return (
    <div className="container">
      <Header
      title='Martial Arts: JuiJitsu and Thai Boxing' />
      <Programs />
      <Mission />
    </div>
  );
}

export default App;
