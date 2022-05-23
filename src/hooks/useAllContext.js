import { useContext } from "react"
import { Context } from "../context/AppContext"

const useAllContext = () => {
    return useContext(Context);
}

export default useAllContext;