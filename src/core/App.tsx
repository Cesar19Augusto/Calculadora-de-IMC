import './App.css'
import Table from '../components/Table';
import { useState } from 'react';

//Preciso fazer a funcionalidade do button para armazenar os valores que ele recebe e fazer uma conta simples, elevar a altura ao quadrado e depois dividir pelo peso.
function App() {
    const [peso, setpeso] = useState<number>(0);
    const [altura, setaltura] = useState<number>(0);


  const clickButton = () => {
    console.log('Botão clicado')
  }

  return (
    <div className="pesquisa">
      <p>Peso</p>
      <input type="text" placeholder="KG" value={peso} />
      <p>Altura</p>
      <input type="text" placeholder="CM" value={altura}/>
      <div className="btnContainer">
        <button onClick={clickButton}>Calcular</button>
      </div>
      <Table />
      <img src=".\src\assets\Size=Default.png" alt="tabela IMC" />
    </div>
  )
}

export default App
