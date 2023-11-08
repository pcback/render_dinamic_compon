import "./App.css";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BaseColaboradores } from "./components/BaseColaboradores";
import { useState } from "react";
import Lista from "./components/Lista";
import Footer from "./components/Footer";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

  return (
    <>
      <div>
        <div>
          <Header />
          <Formulario
            setColaboradores={setColaboradores}
            colaboradores={colaboradores}
          />
          <Lista colaboradores={colaboradores}></Lista>
        </div>
        <div>
          <Footer
            classN={"bg-dark text-white text-center p-3"}
            text={"Noviembre 2023. Todos los derechos reservados."}
          ></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
