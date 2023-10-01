import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Area from './componentes/Area';
import Rodape from './componentes/Rodape';
import './App.css';

function App() {

  const areasDeConhecimento = [
    {
      nome: 'Literatura',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Ciência',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Artes',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Filosofia',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Política',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    }
  ];

  const inicial = [
    {
      nome: 'Maria Gaetana Agnesi',
      cargo: 'Matemática Italiana',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Maria_Gaetana_Agnesi.jpg/200px-Maria_Gaetana_Agnesi.jpg',
      area: areasDeConhecimento[1].nome
    },
    {
      nome: 'Marie-Sophie Germain',
      cargo: 'Matemática Francesa',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Germain.jpeg/200px-Germain.jpeg',
      area: areasDeConhecimento[1].nome
    },
    {
      nome: 'Irène Joliot-Curie',
      cargo: 'Física Francesa',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Joliot-curie.jpg/200px-Joliot-curie.jpg',
      area: areasDeConhecimento[1].nome
    },
    {
      nome: 'Simone de Beauvoir',
      cargo: 'Filósofa Francesa',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Simone_de_Beauvoir2.png/220px-Simone_de_Beauvoir2.png',
      area: areasDeConhecimento[3].nome
    }
  ];

  const [pessoas, setPessoas] = useState(inicial);

  const aNovaPessoaAdicionada = (pessoa) => {
    setPessoas([...pessoas, pessoa]);
  };

  const [exibir, setExibir] = useState(true);

  const toggleForm = () => {
    let controle = exibir;
    setExibir(!controle);
  }

  return (
    <div className="App">
      <Banner />
      {exibir && <Formulario
        areasDeConhecimento={areasDeConhecimento.map(area => area.nome)}
        aPessoaCadastrada={pessoa => aNovaPessoaAdicionada(pessoa)}
      />}
      <section className="organizacao">
        <h2>Minha Organização:</h2>
        <p>Um texto descritivo...</p>
        <p>Parágrafo</p>
        <button onClick={toggleForm}>
          <img src="imagens/toggle.svg" alt="toggleForm" />
        </button>
      </section>
      {areasDeConhecimento.map(area => <Area
        key={area.nome}
        nome={area.nome}
        corPrimaria={area.corPrimaria}
        corSecundaria={area.corSecundaria}
        conhecedoras={pessoas.filter(pessoa => pessoa.area === area.nome)}
      />)}
      <Rodape />
    </div>
  );
}

export default App;
