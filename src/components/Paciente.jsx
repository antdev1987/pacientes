import React from 'react'

const Paciente = ({ paciente,setPaciente,setPacientes }) => {


   const {nombre, propietario, email, fecha, sintomas} = paciente

   const deletion =()=>{

      setPacientes((prev)=>{

         return prev.filter((item)=>{
            return paciente.id !== item.id
         })

      })

   }

   return (
      <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
         <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre {''}
            <span className='font-normal normal-case'>{nombre}</span>
         </p>

         <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario {''}
            <span className='font-normal normal-case'>{propietario}</span>
         </p>

         <p className='font-bold mb-3 text-gray-700 uppercase'>email {''}
            <span className='font-normal normal-case'>{email}</span>
         </p>

         <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta {''}
            <span className='font-normal normal-case'>{fecha}</span>
         </p>

         <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas {''}
            <span className='font-normal normal-case'>{sintomas}</span>
         </p>

         <div>
            <button
               type='button'
               className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md mr-1'
               onClick={()=>setPaciente(paciente)}
            >
               editar
            </button>

            <button
               type='button'
               className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md'
               onClick={deletion}
            >
               eliminar
            </button>


         </div>
      </div>
      
   )
}

export default Paciente
