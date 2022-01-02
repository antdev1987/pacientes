import React from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({ pacientes }) => {

   console.log(pacientes.length)

   console.log(!(pacientes.length))

   return (

      <>     
         {/* se renderizara si no hay nada en el array */}
         {!(pacientes.length) && (
            <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>

               <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
               <p className='text-xl mt-5 mb-10 text-center'>
                  No hay Pacientes {''}
                  <span className='text-indigo-600 font-bold'>Crea una Nuevo</span>
               </p>



            </div>
         )}

         {/* se renderizara si hay datos en el array */}
         {!!pacientes.length && (
            <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>

               <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
               <p className='text-xl mt-5 mb-10 text-center'>
                  Administras tus {''}
                  <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
               </p>

               {pacientes.map(paciente =>
               (
                  <Paciente key={paciente.id} paciente={paciente} />
               )
               )}
            </div>
         )}

      </>
   )
}

export default ListadoPacientes
