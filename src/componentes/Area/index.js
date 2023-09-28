import Conhecedora from '../Conhecedora';
import './Area.css';

const Area = (props) => {
    return (
        //props.corPrimaria
        (props.conhecedoras.length > 0) ? <section className="time" style={{ backgroundColor: props.corSecundaria }}>
            <h3>{props.nome}<span style={{ backgroundColor: props.corPrimaria }}></span></h3>
            <div className="conhecedoras">
                {props.conhecedoras.map(conhecedora => <Conhecedora
                    key={conhecedora.nome}
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
