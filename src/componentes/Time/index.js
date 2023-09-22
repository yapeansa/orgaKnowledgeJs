import './Time.css';

const Time = (props) => {
    return (
        //props.corPrimaria
        <section className="time" style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        </section>
    );
};

export default Time;
