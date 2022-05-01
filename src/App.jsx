import {Header} from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import Formulario from "./components/Formulario";
import {useState, useEffect} from "react";

function App() {

    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPaciente] = useState({});


    useEffect(() => {
        const obtenerLS = () => {
            const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
            setPacientes(pacientesLS)
        }
        obtenerLS();
    },[]);

    useEffect(() => {
        localStorage.setItem('pacientes', JSON.stringify( pacientes ));
    }, [pacientes])

    const eliminarPaciente = id => {
        const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);

        setPacientes(pacientesActualizados)
    }

  return (
    <div className="container mx-auto mt-10">
      <Header />

      <div className="mt-12 md:flex">
          <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
          />
          <ListadoPacientes
            pacientes={pacientes}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
      </div>
    </div>
  )
}

export default App
