import Conhecedora from '../Conhecedora';
import './Area.css';

const Area = (props) => {
    return (
        //props.corPrimaria
        (props.conhecedoras.length > 0) ? <section className="time" style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className="conhecedoras">
                {props.conhecedoras.map(conhecedora => <Conhecedora
                    nome={conhecedora.nome}
                    cargo={conhecedora.cargo}
                    imagem={conhecedora.imagem}
                    corPrimaria={props.corPrimaria}
                    corSecundaria={props.corSecundaria}
                />)}
            </div>
        </section>
        : ''
    );
};

export default Area;
