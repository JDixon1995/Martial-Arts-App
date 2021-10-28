import './App.css';
import Header from './components/Header'
import Programs from './components/Programs'
import Mission from './components/Mission'
import Form from './components/Form'

const App = () => {

  

  return (
    <div className="container">
      <Header
      title='Martial Arts: JuiJitsu and Thai Boxing' />
      <Programs />
      <Mission />
      <Form />
    </div>
  );
}

export default App;
