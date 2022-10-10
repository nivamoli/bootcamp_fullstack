import './App.css';

function App() {
  const mensaje = 'Hola Mundo desde variable'
  const a = 2
  const b = 3
  return (
    <div className="App">
      {mensaje}
      <br />
      {a + b}
    </div>
  );
}

export default App;
