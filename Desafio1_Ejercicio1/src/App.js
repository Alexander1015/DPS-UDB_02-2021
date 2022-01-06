import React from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <div className="Formulario">
          <h2>Lista de Compras</h2>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
