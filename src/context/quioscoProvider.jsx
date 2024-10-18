import { createContext } from "react";

const quioscoContext = createContext();

const QuioscoProvider = ({children}) => {

    const autenticado = true; 

    return (
        <quioscoContext.Provider
            value={{
                autenticado 
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
