import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { categorias as categoriasDB } from "../data/categorias";

const quioscoContext = createContext();

const QuioscoProvider = ({ children }) => {

    const [categorias, setCategoria] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
    const [modal, setModal] = useState(false);
    const [producto, setproducto] = useState({})
    const [pedido, setpedido] = useState([])

    const handleClickCategoria = id => {
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        console.log(categoria.nombre);
        setCategoriaActual(categoria);
    }

    const handleClickModal = () => {
        setModal(!modal)
    }

    const handleSetProducto = producto => {
        setproducto(producto)
    }



    const handleAgregarPedido = ({ categoria_id, ...producto }) => { //elimina del objeto la categoria y la imagen

        const itemExisteEnElPedido = pedido.some(ped => ped.id === producto.id)

        //some y find es igual
        if (itemExisteEnElPedido) {
            /*  const edicionProducto = pedido.map(pedidoState => pedidoState.id === producto.id ? producto : pedidoState)
             setpedido(edicionProducto) */

            const nuevoPedido = [...pedido]; //es un array
            for (let i = 0; i < pedido.length; i++) {
                if (pedido[i].id === producto.id) {
                    nuevoPedido[i] = { ...producto }
                    break;
                }
            }
            setpedido(nuevoPedido);
            toast.success("Guardado correctamente")
        } else {
            setpedido([...pedido, producto])
            toast.success("agregado al pedido")
        }
    }

    const handleClickEditarCantidad = id => {
        const productoSeleccionado = pedido.filter(p => p.id === id)[0];
        setproducto(productoSeleccionado)
        setModal(!modal)
    }

    const eliminarProductoPedido = id => {
        const productoSeleccionado = pedido.filter(p => p.id !== id);
        setpedido(productoSeleccionado)
        toast.success("Eliminado")
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
                pedido,
                handleAgregarPedido,
                setpedido,
                handleClickEditarCantidad,
                eliminarProductoPedido
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
