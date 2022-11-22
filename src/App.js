import './App.css';
import Boton from './componentes/Boton';
import { Contador } from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);
  
  const sumar = () => {
  setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  const arrNumber = [1,2,3,4,5,6,7,8,9,10];
  const randomFunc = () => {
  setCount(Math.floor(Math.random() * arrNumber.length));
  };

  return (
    <div className="App">      
      <div className='contenedor-principal'>
      <Contador conteo={ count }/>

        <Boton 
        texto="Positivo" 
        botonClick={ true } 
        manejarClick={ sumar } 
        //manejarClick={() => {setCount(count + 1)}} 
        />
        <Boton 
        texto="Negativo" 
        botonClick={ true } 
        manejarClick={ () => setCount(count - 1) } 
        />
         <Boton 
        texto="Reinicar" 
        botonClick={ false } 
        manejarClick={ reset } 
        />
         <Boton 
        texto="Random" 
        botonClick={ false } 
        manejarClick={ randomFunc } 
        />
      </div>  

    </div>
  );
}

export default App;
