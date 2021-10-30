import './App.css';
import { useState } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Programs from './components/Programs'
import Mission from './components/Mission'
import Button from './components/Button'
import Form from './components/Form'
import Footer from './components/Footer'

const App = () => {

  const [showPLForm, setShowPLForm] = useState(false)

  const addRes = (e) => {
    e.preventDefault();
    console.log('Clicked', e.target)
  }

  return (
    <div className="container">
      <Header
      title='Martial Arts: JuiJitsu and Thai Boxing' />
      <Nav />
      <Programs />
      <Mission />
      <Button
       text="Book Class"
       onClick={() => setShowPLForm(!showPLForm)}
      />
      {showPLForm && <Form onSubmit={addRes} />}
      <Footer />
    </div>
  );
}

export default App;
