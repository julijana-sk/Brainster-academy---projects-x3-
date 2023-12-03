import { BrandType, DataType, ProductType } from "@/types/types";
import React, { createContext, useEffect, useState } from "react";

interface UserContextType {
  user: {
    email: string;
  } | null;
  handleLogin: (username: string, password: string) => void;
  handleLogout: () => void;
  data: DataType[];
  brands: BrandType[];
  addToCard: (prod: ProductType) => void;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  handleLogin: () => {},
  handleLogout: () => {},
  data: [],
  brands: [],
  addToCard: () => {},
});

interface Props {
  children: React.ReactNode;
}


const UserContextConstructor: React.FC<Props> = ({ children }) => {

  const [user, setUser] = useState<UserContextType["user"] | null>({email: 'igralishte@hotmail.com'});
  const [data, setData] = useState<DataType[]>([]);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [brands, setBrands] = useState<BrandType[]>([]);
  const [addItems, setAddedToCard] = useState<ProductType>();


  useEffect(() => {
    const loggedInUser = localStorage.getItem("username");
      if (loggedInUser) {
        setUser({ email: loggedInUser });
      }
}, []);
    
    useEffect(() => {
      fetch("http://localhost:5001/")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        // setUser(null)
        });
    }, []);

    useEffect(() => {
        fetch("http://localhost:5001/brands")
        .then((res) => res.json())
        .then((brands) => {
            setData(brands);
        });
    }, []);

 

  const addToCard = (prod: ProductType) => {
    const updatedAllProducts: ProductType | undefined = undefined;
    
    products?.map((p) => {
      if (p.id === prod.id) {
        return {
          ...p,
          selected: !p.selected,
          amount: p.selected ? 0 : 1,
        };
      }
      return p;
    });
    setAddedToCard(updatedAllProducts);

  };

  
  
  const handleLogin = (username: string, password: string) => {
    if (username === "igralishte" && password === "12345") {
        localStorage.setItem("username", username);
        setUser({ email: username });
      }
      return;
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUser(null);
  };
  


  return (
    <UserContext.Provider value={{ 
        user, 
        handleLogin, 
        handleLogout,
        data,
        brands,
        addToCard
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextConstructor;
