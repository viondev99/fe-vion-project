import { useContext } from "react";
import { ProductContext } from "store/product-context";

export function useProductCtx() {
    return useContext(ProductContext)
}