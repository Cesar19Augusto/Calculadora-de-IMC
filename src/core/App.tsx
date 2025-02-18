import './App.css'
import Table from '../components/Table';
import { useState } from 'react';

function App() {
  const [peso, setPeso] = useState<number>(0);
  const [altura, setAltura] = useState<number>(0);
  const [resultadoImc, setResultadoImc] = useState<number | null>(null);


  const clickButton = () => {
    const alturaEmMetros = altura / 100;
    const multAlt = alturaEmMetros * alturaEmMetros;
    const imc = peso / multAlt;

    setResultadoImc(imc);
  }

  return (
    <div className="pesquisa">
      <p>Peso</p>
      <input type="text" placeholder="Digite seu peso em KG" value={peso} onChange={(e) => setPeso(parseFloat(e.target.value))} />
      <p>Altura</p>
      <input type="text" placeholder="Digite seu altura em CM" value={altura} onChange={(e) => setAltura(parseFloat(e.target.value))} />
      <div className="btnContainer">
        <button onClick={clickButton}>Calcular</button>
      </div>
      {resultadoImc === null ? (
        <p className="mensagemPre">Saiba agora se está no seu <br/> peso ideal!</p>
      ) : (
        <Table resultadoImc={resultadoImc} peso={peso} altura={altura}/> 
      )}
      <img src=".\src\assets\Size=Default.png" alt="tabela IMC" />
    </div>
  )
}

export default App
