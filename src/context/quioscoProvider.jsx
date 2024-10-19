import { createContext, useState } from "react";
import { categorias as categoriasDB } from "../data/categorias";

const quioscoContext = createContext();

const QuioscoProvider = ({ children }) => {

    const [categorias, setCategoria] = useState(categoriasDB);

    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);

    const handleClickCategoria = id => {
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        console.log(categoria.nombre);
        setCategoriaActual(categoria);
    }

    console.log(categoriaActual);

    return (
        <quioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria
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
