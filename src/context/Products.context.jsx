import { createContext, useState } from "react";

export const ProductsContext = createContext({});

export const ProductsProvider = ({ children }) => {
  const [product, setProduct] = useState();
  const [color, setColor] = useState("");
  const [bg, setBg] = useState("");
  const [load, setLoad] = useState(false);

  const value = {
    product,
    setProduct,
    color,
    setColor,
    bg,
    setBg,
    load,
    setLoad,
  };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
