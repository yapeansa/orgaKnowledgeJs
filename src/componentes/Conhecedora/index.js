import './Conhecedora.css';

const Conhecedora = ({ nome, cargo, imagem }) => {
    return (
        <div className="conhecedora">
            <div className="cabecalho">
                <img src={imagem} alt={nome} />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    );
};

export default Conhecedora;
