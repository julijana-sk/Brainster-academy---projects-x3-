import { ProductType } from "@/types/types";
import React, { createContext, useEffect, useState } from "react";

interface UserContextType {
  user: {
    email: string;
  } | null;
  handleLogIn: (username: string, password: string) => void;
  handleLogOut: () => void;
  products: ProductType[];

}

export const UserContext = createContext<UserContextType>({
  user: null,
  handleLogIn: () => {},
  handleLogOut: () => {},
  products: []
});

interface Props {
  children: React.ReactNode;
}

const UserContextConstructor: React.FC<Props> = ({ children }) => {

  const [user, setUser] = useState<UserContextType["user"]>({email: "igralishte@hotmail.com"});
  const [products, setProducts] = useState<ProductType[]>([]);
  // const [isFavorite, setIsFavorite] = useState(false);




  //  useEffect(() => {
  //       fetch("http://localhost:5001/products")
  //       .then((res) => res.json())
  //       .then((products) => {
  //           setProducts(products);
  //       });
  //   }, []);
  //   console.log(products)


    // ... >  PODESI ZA USER KORISNIK AKO GO IMA VO LOCAL STORAGE !!!!! < ---- 
    // useEffect(() => {
    //     const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    //     setIsFavorite(favorites.includes(id));
    // }, [id]);


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
        products
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextConstructor;
