import { DataType, ProductType } from "@/types/types";
import React, { createContext, useEffect, useState } from "react";

interface UserContextType {
  user: {
    email: string;
  } | null,
  handleLogIn: (username: string, password: string) => void,
  handleLogOut: () => void,
  getRandomProducts: (products: ProductType[], count: number) => ProductType[];
  data: DataType[];
}

export const UserContext = createContext<UserContextType>({
  user: null,
  handleLogIn: () => {},
  handleLogOut: () => {},
  getRandomProducts: (products: ProductType[], count: number) => [],
  data: []
});

interface Props {
  children: React.ReactNode;
}

const UserContextConstructor: React.FC<Props> = ({ children }) => {

  // const [user, setUser] = useState<UserContextType["user"]>({email: ""});
  const [user, setUser] = useState<UserContextType["user"]>({email: "igralishte@hotmail.com"});
  const [data, setData] = useState<DataType[]>([]);



  useEffect(() => {
        fetch("http://localhost:5001")
        .then((res) => res.json())
        .then((data) => {
            setData(data);
            // setUser(null)
        });
    }, []);


  const handleLogIn = (username: string, password: string) => {

    if (username === "igralishte" && password === "12345") {
      setUser({ email: "igralishte@hotmail.com" });
    }
  };

  const handleLogOut = () => {
    setUser(null);
  };


  function getRandomProducts(products: ProductType[], count: number): ProductType[] {
    const randomProducts: ProductType[] = [];

    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * products.length);
        randomProducts.push(products[randomIndex]);

        // za da nema duplikat
        products.splice(randomIndex, 1);
    }
    return randomProducts;
}




  return (
    <UserContext.Provider value={{ 
        user, 
        handleLogIn, 
        handleLogOut,
        getRandomProducts,
        data
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextConstructor;
