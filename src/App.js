import './App.css';
import Header from './components/Header'
import Programs from './components/Programs'
import Mission from './components/Mission'
import Form from './components/Form'
import Footer from './components/Footer'

const App = () => {

  const addRes = (e) => {
    e.preventDefault();
    console.log('Clicked', e.target)
  }

  return (
    <div className="container">
      <Header
      title='Martial Arts: JuiJitsu and Thai Boxing' />
      <Programs />
      <Mission />
      <Form onSubmit={addRes} />
      <Footer />
    </div>
  );
}

export default App;
