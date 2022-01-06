import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [dolar, setDolar] = useState(0);
  const [euro, setEuro] = useState(0);
  const [bitcoin, setBitcoin] = useState(0);

  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if(tipo == 1) {
      setDolar(total * 1);
      setEuro(total * 0.85)
      setBitcoin(total / 46400.30);
    }
    else if(tipo == 2) {
      setDolar(total * 1.17);
      setEuro(total * 1)
      setBitcoin(total / 39533.19);
    }
    else if(tipo == 3) {
      setDolar(total * 46400.30);
      setEuro(total * 39533.19)
      setBitcoin(total * 1);
    }
  }, [total, tipo]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };


  return (
    <div className="App">
      <h1>Convertidor de divisas</h1>

      <p>Dolar: {dolar}</p>
      <p>Euro: {euro}</p>
      <p>Bitcoin: {bitcoin}</p>

      <hr />

      <h3>{total}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value={1}>Dolar</option>
        <option value={2}>Euro</option>
        <option value={3}>Bitcoin</option>
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;
