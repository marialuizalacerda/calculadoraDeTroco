import React, { useState } from 'react';
import '/src/style.css';

const ChangeCalculator = () => {
  const [purchaseValue, setPurchaseValue] = useState('')
  const [moneyGiven, setMoneyGiven] = useState('')
  const [change, setChange] = useState(0)
  const [changeNotes, setChangeNotes] = useState({})

  const handleCalculateChange = () => {
    const purchase = parseFloat(purchaseValue)
    const given = parseFloat(moneyGiven)

    if (isNaN(purchase) || isNaN(given) || purchase <= 0 || given < purchase) {
      alert('Por favor, insira valores válidos.')
      return;
    }

    let totalChange = given - purchase;
    const notes = { 100: 0, 10: 0, 1: 0 };

    while (totalChange > 0) {
      if (totalChange >= 100) {
        notes[100]++
        totalChange -= 100
      } else if (totalChange >= 10) {
        notes[10]++
        totalChange -= 10
      } else {
        notes[1]++
        totalChange -= 1
      }
    }

    setChange(given - purchase);
    setChangeNotes(notes)
  }

  return (
    <div className="container">
      <h2>Calculadora de Troco</h2>
      <label>
        Valor da Compra:
        <input type="number" value={purchaseValue} onChange={(e) => setPurchaseValue(e.target.value)} />
      </label>
      <br />
      <label>
        Dinheiro Entregue:
        <input type="number" value={moneyGiven} onChange={(e) => setMoneyGiven(e.target.value)} />
      </label>
      <br />
      <button onClick={handleCalculateChange}>Calcular Troco</button>
      <br />
      {change > 0 && (
        <div>
          <h3>Resumo do Troco:</h3>
          <p>Valor da Compra: R$ {purchaseValue}</p>
          <p>Valor Entregue: R$ {moneyGiven}</p>
          <p>Troco: R$ {change}</p>
          <p>Notas do Troco:</p>
          <ul>
            <li>R$ 100: {changeNotes[100]}</li>
            <li>R$ 10: {changeNotes[10]}</li>
            <li>R$ 1: {changeNotes[1]}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ChangeCalculator