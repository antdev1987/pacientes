import React from 'react'

const Paciente = () => {
    return (
        <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre {''}
               <span className='font-normal normal-case'>Hook</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario {''}
               <span className='font-normal normal-case'>Manuel</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>email {''}
               <span className='font-normal normal-case'>corrego@correo.com</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta {''}
               <span className='font-normal normal-case'>10 diciembre 2022</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas {''}
               <span className='font-normal normal-case'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis cumque itaque excepturi odit fuga similique ratione! Deleniti distinctio fuga mollitia rem sed odio incidunt quos magnam ut! Qui, ea recusandae!</span>
            </p>
         </div>
    )
}

export default Paciente
