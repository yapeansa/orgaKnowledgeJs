import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [area, setArea] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aPessoaCadastrada({
            nome,
            cargo,
            imagem,
            area
        });
    };

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card de uma mulher do conhecimento</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o seu nome"
                    value={nome}
                    aoAlterar={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Especialidade"
                    placeholder="Digite o seu cargo"
                    value={cargo}
                    aoAlterar={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    value={imagem}
                    aoAlterar={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    itens={props.areasDeConhecimento}
                    label="Área de Conhecimento"
                    value={area}
                    aoAlterar={valor => setArea(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    );
};

export default Formulario;
