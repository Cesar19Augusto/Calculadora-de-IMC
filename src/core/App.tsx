import './App.css'
import Table from '../components/Table';
import { useState } from 'react';
import tabelaImg from '../assets/tambela_imc.png';

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

  function verificarPesagem(resultadoImc: number): string {
    if (resultadoImc <= 17) {
      return "Muito abaixo do peso";
    }
    else if (resultadoImc > 17 && resultadoImc <= 18.49) {
      return "Abaixo do peso";
    }
    else if (resultadoImc >= 18.5 && resultadoImc <= 24.99) {
      return "Peso normal";
    }
    else if (resultadoImc >= 25 && resultadoImc <= 29.99) {
      return "Acima do peso";
    }
    else if (resultadoImc >= 30 && resultadoImc <= 34.99) {
      return "Obesidade I";
    }
    else if (resultadoImc >= 35 && resultadoImc <= 39.99) {
      return "Obesidade II (Severa)";
    }
    else {
      return "Obesidade III (Morbida)";
    }
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
          <p className="mensagemPre">Saiba agora se está no seu <br /> peso ideal!</p>
        ) : (
          <Table resultadoImc={resultadoImc} peso={peso} altura={altura} mediaPassagem={verificarPesagem(resultadoImc)} />
        )}
        <img src={tabelaImg} />
      </div>
    )
  }

  export default App
