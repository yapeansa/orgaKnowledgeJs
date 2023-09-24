import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Area from './componentes/Area';
import Rodape from './componentes/Rodape';

function App() {

  const areasDeConhecimento = [
    {
      nome: 'Álgebra',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Análise',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Geometria',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Sistemas Dinâmicos',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Estatística',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    }
  ];

  const [pessoas, setPessoas] = useState([]);

  const aNovaPessoaAdicionada = (pessoa) => {
    console.log(pessoa);
    setPessoas([...pessoas, pessoa]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario areasDeConhecimento={areasDeConhecimento.map(area => area.nome)} aPessoaCadastrada={pessoa => aNovaPessoaAdicionada(pessoa)} />
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
