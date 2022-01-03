import { useState } from 'react';

import Form from './components/Form'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes';

import './App.css';

function App() {

  const [bdPacientes, setBdPacientes] = useState([])
  
  return (
    <div className="App">
      <Header />

      <div className='formListado'>
      <Form setBdPacientes={setBdPacientes}/>
      <ListadoPacientes bdPacientes={bdPacientes} />
      </div>
    </div>
  )
}

export default App
