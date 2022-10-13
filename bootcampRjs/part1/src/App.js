import './App.css';
import Mensaje from './Mensaje';

const Description = () => {
  return <p>Este es el curso de fullStack</p>
}


function App() {
  return (
    <div className="App">
      <Mensaje color='green' message='Estamos trabajando'/>
      <Mensaje color='red' message='En un curso'/>
      <Mensaje color='blue' message='De react'/>
      <Description/>
    </div>
  );
}

export default App;
