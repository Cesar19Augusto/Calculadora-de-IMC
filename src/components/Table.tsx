import './Table.module.css';

interface TableProps {
    resultadoImc: number;
    peso: number;
    altura: number;
}

function Table({ resultadoImc, peso, altura }: TableProps) {
    return (
        <div>
            <div className="grid grid-flow-col text">               
                <p>Peso</p>
                <p>Altura</p>
                <p>IMC</p>
                <p>Resultado</p>   
            </div>
            <hr />
            <div className="grid grid-flow-col">            
                <p>{peso}</p>
                <p>{altura}</p>
                <p>{resultadoImc.toFixed(2)}</p>
                <p>Peso Normal</p>
            </div>
        </div>
    )
}

export default Table 