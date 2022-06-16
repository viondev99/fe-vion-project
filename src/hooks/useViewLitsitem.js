import React from "react";

import { ProductContext } from "../store/product-context";

export function useListitem() {
    return React.useContext(ProductContext)
}