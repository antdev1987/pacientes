import React from 'react'
import styles from './listadoPacientes.module.css'

const PacienteList = ({paciente}) => {

    return (
        <>
            <div className={styles.listCard}>

                <p>Nombre <span>{paciente.nombre}</span></p>
                <p>Propietario <span>{paciente.propietario}</span></p>
                <p>Email <span>{paciente.email}</span></p>
                <p>Fecha Alta <span>{paciente.fecha}</span></p>
                <p>Sintomas <span>{paciente.sintomas}</span></p>

                <button className={styles.btn}>Editar</button>
                <button className={styles.btn}>Eliminar</button>

            </div>
        </>
    )
}

export default PacienteList
