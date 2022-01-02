import React, {useState, useEffect} from 'react'

import Error from './Error'

const Formulario = ({setPacientes,paciente}) => {
   // const [nombre, setNombre] = useState('')
   const [input, setInput] =useState({nombre:'',propietario:'',email:'',fecha:'',sintomas:''})
   const {nombre,propietario,email,fecha,sintomas} = input

   const [error,setError] = useState(false)

   useEffect(()=>{
      console.log(paciente)

   }, [paciente])


   //generando el id
   const generateId =()=>{
      const random = Math.random().toString(36).substring(2)
      const fecha = Date.now().toString(36)

      return random + fecha
   }

   //managing when user click the submit button
   const handleSubmit =(e)=>{
      e.preventDefault()


      if([nombre,propietario,email,fecha,sintomas].includes('')){
         console.log('todo es obligatorio')
         setError(true)
         return
      }

      setPacientes((prev)=>{
         return [
            ...prev,
            input
         ]
      })

      //reiniciando formulario
      setInput({nombre:'',propietario:'',email:'',fecha:'',sintomas:''})
      setError(false)
   }

   //managing the inputs value
   const handleInputs =(e)=>{
      setInput(
         {
            ...input,
            [e.target.name]:e.target.value,
            id:generateId()
         }
      )
   }




   return (
      <div className='md:w-1/2 lg:w-2/5'>
         <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

         <p className='text-lg mt-5 text-center mb-10'>
            Anade Paciente y {''}
            <span className='text-indigo-600 font-bold'>Administralos</span>
         </p>

         <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'> 

            {error && <Error mensaje='todos los campos son obligatorios' /> }

            <div className='mb-5'>
               <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
               <input
               id='mascota'
                  type='text'
                  placeholder='Nombre de la Mascota'
                  className='border-2 w-full p-2 mt-2 rounded-md'
                  value={nombre}
                  name='nombre'
                  onChange={handleInputs}
                  // onChange={(e)=>{setNombre(e.target.value)}}
               />
            </div>

            <div className='mb-5'>
               <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>Nombre Propietario</label>
               <input
               id='propietario'
                  type='text'
                  placeholder='Nombre del propietario'
                  className='border-2 w-full p-2 mt-2 rounded-md'
                  value={propietario}
                  name='propietario'
                  onChange={handleInputs}
               />
            </div>

            <div className='mb-5'>
               <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>email</label>
               <input
               id='email'
                  type='email'
                  placeholder='email propietario'
                  className='border-2 w-full p-2 mt-2 rounded-md'
                  value={email}
                  name='email'
                  onChange={handleInputs}
               />
            </div>

            <div className='mb-5'>
               <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>alta</label>
               <input
               id='alta'
                  type='date'
                  className='border-2 w-full p-2 mt-2 rounded-md'
                  value={fecha}
                  name='fecha'
                  onChange={handleInputs}
               />
            </div>

            <div className='mb-5'>
               <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>Sintomas</label>
               <textarea
                value={sintomas}
                name='sintomas'
                onChange={handleInputs}               
               className='border-2 w-full p-2 mt-2 rounded-md'
                placeholder='describe sintomas' id="sintomas" cols="30"></textarea>
            </div>

            <input
               type='submit'
               value='agregar paciente'
               className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer'
            />

         </form>

      </div>
   )
}

export default Formulario
