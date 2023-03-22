import { createContext, useContext, useState } from "react";

const ApiContext = createContext(undefined);

export const ApiProvider = ({ children }) => {
  const [api] = useState({
    path: "http://localhost:8000/",
    signup: "createUser",
    login: "login",
    view_items: "view_cart_items/",
    create_order_item: "create_order_item",
    remove_item: "remove_cart_item/",
    place_order: "place_order",
  });
  return <ApiContext.Provider value={{ api }}>{children}</ApiContext.Provider>;
};

export const useApiContext = () => useContext(ApiContext);
