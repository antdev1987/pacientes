import styles from './listadoPacientes.module.css'
import PacienteList from './PacienteList'

const ListadoPacientes = ({ bdPacientes, setListPaciente, setBdPacientes}) => {

   console.log(bdPacientes)

   console.log(!(bdPacientes.length))
   console.log(bdPacientes.length)

   return (


      <div className={styles.listado}>

         {!(bdPacientes.length) &&
            (

               <div className={styles.listComponent}>
                  <h2>No hay Pacientes</h2>
                  <p className={styles.listP}>Agrega <span>y Administra</span></p>
               </div>

            )}

         {/* <div className={styles.listComponent}>
                <h2>Listado Pacietnes</h2>
                <p className={styles.listP}>Administra tus <span>Pacientes y Citas</span></p>
            </div> */}


         {!!bdPacientes.length &&
            (

               <>
                  <div className={styles.listComponent}>
                     <h2>Listado Pacientes</h2>
                     <p className={styles.listP}>Administra tus<span> Pacientes y Citas</span></p>
                  </div>


                  <div className={styles.wrapper}>

                     {bdPacientes.map(paciente =>
                     (
                        <PacienteList setBdPacientes={setBdPacientes} setListPaciente={setListPaciente} key={paciente.id} paciente={paciente} />
                     )
                     )}

                  </div>

               </>

         )}




         {/* <div className={styles.wrapper}>

            {bdPacientes.map(paciente =>
            (
               <PacienteList setListPaciente={setListPaciente} key={paciente.id} paciente={paciente} />
            ))}

         </div> */}




      </div>
   )

}

export default ListadoPacientes