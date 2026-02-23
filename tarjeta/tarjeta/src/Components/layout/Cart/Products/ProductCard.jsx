// added
import { useState } from "react";

export default function  ProductCard({ name, price, description }) {   
    const [added, setAdded] = useState(false);
    return (
        <div className="border p-6 rounded shadow">
            <h3>{name}</h3>
            <p>{price}</p>
            <button
            onClick={() => setAdded(true)}
            className={`mt-4 px-4 py-2 rounded text-white 
                ${added ? "bg-green-600" : "bg-blue-600"}`}
            disabled={added}
            >
                {added ?" Agregado 😄 " : "Agregar al carrito"}
            </button>
        </div>
    );
}
        
/*

    - Cada tarheta tiene su propio estado interno
    - added controla si ya se agrego o no
    - el boton cambia:
     -Texto
     - color
     - Accion

     Esto se le conoce como reactividad en React
*/