import { BrandType, ProductType } from "@/types/types";
import React, { createContext, useEffect, useState } from "react";

interface UserContextType {
  user: {
    email: string;
  } | null,
  handleLogIn: (username: string, password: string) => void,
  handleLogOut: () => void,
  products: ProductType[],
  brands: BrandType[]
}

export const UserContext = createContext<UserContextType>({
  user: null,
  handleLogIn: () => {},
  handleLogOut: () => {},
  products: [],
  brands: []
});

interface Props {
  children: React.ReactNode;
}

const UserContextConstructor: React.FC<Props> = ({ children }) => {

  const [user, setUser] = useState<UserContextType["user"]>({email: "igralishte@hotmail.com"});
  const [products, setProducts] = useState<ProductType[]>([]);
  const [brands, setBrand] = useState<BrandType[]>([]);





  useEffect(() => {
        fetch("http://localhost:5001/products")
        .then((res) => res.json())
        .then((products) => {
            setProducts(products);
        });
    }, []);

console.log(products)

useEffect(() => {
        fetch("http://localhost:5001/brands")
        .then((res) => res.json())
        .then((brands) => {
            setProducts(brands);
        });
    }, []);

console.log(brands)



  const handleLogIn = (username: string, password: string) => {

    if (username === "igralishte" && password === "12345") {
      setUser({ email: "igralishte@hotmail.com" });
    }
  };

  const handleLogOut = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ 
        user, 
        handleLogIn, 
        handleLogOut ,
        products,
        brands
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextConstructor;
