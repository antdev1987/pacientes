import styles from './listadoPacientes.module.css'
import PacienteList from './PacienteList'

const ListadoPacientes = ({bdPacientes}) => {

    console.log(bdPacientes)

    return (
        <div className={styles.listado}>

            <div className={styles.listComponent}>
                <h2>Listado Pacietnes</h2>
                <p className={styles.listP}>Administra tus <span>Pacientes y Citas</span></p>
            </div>

            <div className={styles.wrapper}>

                {bdPacientes.map( paciente =>
                    (
                        <PacienteList key={paciente.id} paciente={paciente}/>
                    ))}

            </div>




        </div>
    )

}

export default ListadoPacientes