import { categorias } from "../data/categorias";
import Categoria from "./Categoria"; // Importación corregida

export default function Sidebar() {
  return (
    <aside className="md:w-72">
      <div className="p-4">
        <img className="max-w-xs" src="../img/logo.svg" alt="imagen logo"></img>
      </div>

      <div className="mt-10">
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </div>

        <div className="my-5 py-5">
            <button 
                type="button"
                className="text-center bg-red-500 w-full p-3 font-bold text-white truncate"
            >cancelar orden</button>
            
        </div>

    </aside>
  );
}
