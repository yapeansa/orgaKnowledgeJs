import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
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
      <Formulario aPessoaCadastrada={pessoa => aNovaPessoaAdicionada(pessoa)} />
      {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} />)}
    </div>
  );
}

export default App;
