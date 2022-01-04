import { useState,useEffect } from 'react'

import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'


function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente,setPaciente]= useState({})


  useEffect(()=>{
    
    const getItm = ()=>{
      const saved = localStorage.getItem('pacientes') 
      const intial = JSON.parse(saved)

      setPacientes(intial ?? [])
    }
    getItm()
  },[])


  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes])


  return (
    <div className="container mx-auto mt-12">
      <Header />

      <div className='mt-12 md:flex'>
        <Formulario setPacientes={setPacientes} paciente={paciente} setPaciente={setPaciente} />
        <ListadoPacientes pacientes={pacientes} setPacientes={setPacientes} setPaciente={setPaciente}/>
      </div>

    </div>
  )
}

export default App 
