import Colaborador from "../Colaborador";
import "./Familia.css";

const Familia = (props) => {
  return props.colaboradores.length > 0 ? (
    <section className="familia" style={{ backgroundColor: props.corS }}>
      <h3 style={{ borderColor: props.corP }}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <Colaborador
            corDeFundo={props.corP}
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Familia;
