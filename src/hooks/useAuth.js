import { useContext } from "react"
import { SVSContext } from "../context/ServicesContext"

const useAuth = () => {
    return useContext(SVSContext);
}

export default useAuth;