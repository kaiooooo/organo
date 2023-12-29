import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario/Formulario";
import Familia from "./componentes/Familia";

function App() {
  const familias = [
    {
      nome: "Ávos",
      corP: "#DB6EBF",
      corS: "#FAE9F5",
    },
    {
      nome: "Pais",
      corP: "#82CFFA",
      corS: "#E8F8FF",
    },
    {
      nome: "Filhos",
      corP: "#E06B69",
      corS: "#FDE7E8",
    },
    {
      nome: "Netos",
      corP: "#57C278",
      corS: "#D9F7E9",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        famílias={familias.map((familia) => familia.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />

      {familias.map((familia) => (
        <Familia
          key={familia.nome}
          nome={familia.nome}
          corP={familia.corP}
          corS={familia.corS}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.familia === familia.nome
          )}
        />
      ))}
    </div>
  );
}

export default App;
