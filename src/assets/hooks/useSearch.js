import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

const useSearch = () => {
    const context = useContext(SearchContext);

    return context;
}

export default useSearch;