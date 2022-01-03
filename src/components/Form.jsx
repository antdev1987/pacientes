import { useState,useEffect } from 'react'

import styles from './form.module.css'


const Form = ({ setBdPacientes, listPaciente, setListPaciente }) => {

   const [input, setInputs] = useState({ nombre: '', propietario: '', email: '', fecha: '', sintomas: ''})
   const [error,setError] = useState(false)


   const { nombre, propietario, email, fecha, sintomas } = input


   useEffect(()=>{

      if(!!listPaciente.id){
        setInputs(listPaciente)
      }
   },[listPaciente])


   //recolectando todos los input 
   const handleInputs = (e) => {
      setInputs((prev) => {
         return {
            ...prev,
            [e.target.name]: e.target.value
         }
      })
   }


   //guardando los inputs recolectados
   const handleSubmit = (e) => {
      e.preventDefault()


      //validation
      if([nombre, propietario, email, fecha, sintomas].includes('')){
         console.log('todo es obligatorio')
         setError(true)
         return
      }

      //condiccion para saber si editar o agregar
      if(!!listPaciente.id){
         setBdPacientes((prev)=>{

            return prev.map((item)=>{
               return item.id === listPaciente.id ? input : item
            })

         })

      }else{
         input.id = Math.random()
         setBdPacientes((prev) => {
            return [
               ...prev,
               input,
            ]
         })

      }

      //reseteo
      setInputs({ nombre: '', propietario: '', email: '', fecha: '', sintomas: ''})
      setListPaciente({})
      setError(false)
   }


   return (
      <div className={styles.form}>

         <div className={styles.formComponent}>
            <h2>Seguimiento Pacients</h2>
            <p className={styles.formP}>Anade Pacientes y <span>Administralos</span></p>
         </div>

         <form onSubmit={handleSubmit} className={styles.formCard}>

            { error && <p className={styles.errorM}>todo es obligatorio</p> }

            <div className={styles.inputWrapper}>
               <label>Nombre Mascota</label>
               <input
                  type='text'
                  name='nombre'
                  value={nombre}
                  placeholder='mascota nombre'
                  onChange={handleInputs}
               />
            </div>

            <div className={styles.inputWrapper}>
               <label>Nombre Propietario</label>
               <input
                  type='text'
                  name='propietario'
                  value={propietario}
                  placeholder='nombre de propietario'
                  onChange={handleInputs}
               />
            </div>

            <div className={styles.inputWrapper}>
               <label>Email</label>
               <input
                  type='text'
                  name='email'
                  value={email}
                  placeholder='email'
                  onChange={handleInputs}
               />
            </div>

            <div className={styles.inputWrapper}>
               <label>Alta</label>
               <input
                  type='date'
                  name='fecha'
                  value={fecha}
                  placeholder='fecha'
                  onChange={handleInputs}
               />
            </div>

            <div className={styles.inputWrapper}>
               <label>Sintomas</label>
               <input
                  type='text'
                  name='sintomas'
                  value={sintomas}
                  placeholder='sintomas'
                  onChange={handleInputs}
               />
            </div>

            <button className={styles.btn}>{listPaciente.id ? 'Editar':'Agregar'}</button>

         </form>

      </div>
   )

}

export default Form