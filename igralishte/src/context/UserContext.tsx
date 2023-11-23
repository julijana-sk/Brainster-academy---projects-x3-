import { DataType, ProductType } from "@/types/types";
import React, { createContext, useEffect, useState } from "react";

interface UserContextType {
  user: {
    email: string;
  } | null,
  handleLogIn: (username: string, password: string) => void,
  handleLogOut: () => void,
  // getRandomProducts: (products: ProductType[], count: number) => ProductType[];
  data: DataType[];
  useFetchAllProducts: () => { loading: boolean; products: ProductType[] };
  addToCard: (prod: ProductType) => void;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  handleLogIn: () => {},
  handleLogOut: () => {},
  // getRandomProducts: (products: ProductType[], count: number) => [],
  data: [],
  useFetchAllProducts: () => ({ loading: false, products: [] }),
  addToCard: () => {}

});

interface Props {
  children: React.ReactNode;
}

const UserContextConstructor: React.FC<Props> = ({ children }) => {

  // const [user, setUser] = useState<UserContextType["user"]>({email: ""});
  const [user, setUser] = useState<UserContextType["user"]>({email: "igralishte@hotmail.com"});
  const [data, setData] = useState<DataType[]>([]);
  const [products, setProducts] = useState<ProductType[]>([]);




  useEffect(() => {
        fetch("http://localhost:5001")
        .then((res) => res.json())
        .then((data) => {
            setData(data);
            // setUser(null)
        });
    }, []);


  const useFetchAllProducts = () => { 
    const [loading, setLoading] = useState(true); 
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => { 
      const fetchData = async () => {
        setLoading(true); 
        const products = await fetch('http://localhost:5001/products'); 

        const allProducts: ProductType[] = [];

          Object.values(products).forEach((productList: ProductType[]) => {
              productList.forEach((product: ProductType) => {
                allProducts.push(product);
              });
            }
          );

          setProducts(allProducts);
          setLoading(false);
        };

        fetchData();
        }, []);

    return { loading, products };

};
        

  const addToCard = (prod: ProductType) => {
    const updatedAllProducts = products.map((p) => {
      if (p.id === prod.id) {
        return {
          ...p,
          selected: !p.selected,
          amount: p.selected ? 0 : 1,
        };
      }
      return p;
    });
    setProducts(updatedAllProducts);
  };

  
  
  const handleLogIn = (username: string, password: string) => {
  
      if (username === "igralishte" && password === "12345") {
        setUser({ email: "igralishte@hotmail.com" });
      }
    };
  
    const handleLogOut = () => {
      setUser(null);
    };
  
  
  //   function getRandomProducts(products: ProductType[], count: number): ProductType[] {
  //     const randomProducts: ProductType[] = [];
  
  //     for (let i = 0; i < count; i++) {
  //         const randomIndex = Math.floor(Math.random() * products.length);
  //         randomProducts.push(products[randomIndex]);
  
  //         // za da nema duplikat
  //         products.splice(randomIndex, 1);
  //     }
  //     return randomProducts;
  // }

  return (
    <UserContext.Provider value={{ 
        user, 
        handleLogIn, 
        handleLogOut,
        // getRandomProducts,
        data,
        useFetchAllProducts,
        addToCard
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextConstructor;
