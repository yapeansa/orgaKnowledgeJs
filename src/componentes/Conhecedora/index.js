import './Conhecedora.css';

const Conhecedora = (props) => {
    return (
        <div className="conhecedora">
            <div className="cabecalho" style={{backgroundColor: props.corPrimaria}}>
                <img src={props.imagem} alt={props.nome} />
            </div>
            <div className="rodape">
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    );
};

export default Conhecedora;
