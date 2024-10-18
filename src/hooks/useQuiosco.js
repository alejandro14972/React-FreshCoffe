import { useContext } from "react"
import quioscoContext from "../context/quioscoProvider"

const useQuiosco = () => {
    return useContext(quioscoContext)
}
export default useQuiosco