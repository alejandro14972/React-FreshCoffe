import useQuiosco from "../hooks/useQuiosco";

export default function Categoria({categoria}) {

  const {handleClickCategoria, categoriaActual} = useQuiosco();

    const {icono, nombre, id} = categoria;

    return (
      <div className={`${categoriaActual.id === id ? "bg-amber-400" : "bg-white"} flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}>


        <img alt="imagen icono" src={`/img/icono_${icono}.svg`} className="w-12"/>
        <button 
            className="text-lg font-bold truncate cursor-pointer"
            type="button"
            onClick={()=> handleClickCategoria(id)}> {/* prevenir un comportamiento no deseado ()=> */}
            {nombre}
        </button>
      
    </div>
  )
}
