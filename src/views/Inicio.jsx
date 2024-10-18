import Producto from "../components/Producto";
import { productos } from "../data/productos";
import useQuiosco from "../hooks/useQuiosco";

export default function Inicio() {

  const {autenticado}= useQuiosco();


  console.log(autenticado);


  return (
    <div>
      <h1 className="text-4xl font-black"></h1>
      <p className="text-2xl my-10">
        Elige y personaliza tu pedido
      </p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
     
        {productos.map(producto=>(
          <Producto 
            key={producto.id}
            producto={producto}
          />
        ))}

      </div>
    </div>
  )
}
