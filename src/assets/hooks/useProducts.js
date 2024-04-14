import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

const useProducts = () => {
    const context = useContext(ProductsContext);

    return context;
}

export default useProducts;