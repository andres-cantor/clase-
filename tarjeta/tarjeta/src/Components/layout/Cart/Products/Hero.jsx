import { useState } from "react";

export default function Hero({title, subtitle}) {
  const[counter, setCounter] = useState(0);
  return (
    <section>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      
      <div>
        <p>Counter: {counter}</p>
        <button 
        onClick={() => setCounter(counter + 1)}
        /*
          onClick
          onChange
          onSubmit
          onMouseOver
          onKeyDown
            
          React -> HTML
          onclick -> onClick

          onClick={miFuncion}
          -- Funcion anonima
          onClick = {() => console.log("Hola")}
        */
        >
          Aumentar

        </button>
      </div>
      
      </section>
  );
}


