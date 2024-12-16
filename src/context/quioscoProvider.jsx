import { createContext, useState } from "react";
import { categorias as categoriasDB } from "../data/categorias";

const quioscoContext = createContext();

const QuioscoProvider = ({ children }) => {

    const [categorias, setCategoria] = useState(categoriasDB);

    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
    const [modal, setModal] = useState(false);

    const[producto, setproducto]= useState({})
    const[pedido, setpedido]= useState([])

    const handleClickCategoria = id => {
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        console.log(categoria.nombre);
        setCategoriaActual(categoria);
    }

    const handleClickModal = () =>{
        setModal(!modal)
    }

    const handleSetProducto = producto =>{
        setproducto(producto)
    }


    return (
        <quioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                handleClickModal,
                producto,
                handleSetProducto,
                pedido
            }}
        >
            {children}
        </quioscoContext.Provider>
    );
};

export {
    QuioscoProvider
};

export default quioscoContext;
