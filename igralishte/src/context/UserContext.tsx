import { BrandType, DataType, ProductType } from "@/types/types";
import React, { createContext, useEffect, useState } from "react";

interface UserContextType {
  user: {
    email: string;
  } | null;
  handleLogin: (username: string, password: string) => void;
  handleLogout: () => void;
  data: DataType[];
  useFetchAllProducts: () => { loading: boolean; products: ProductType[] };
  brands: BrandType[];
  vintageClothes: ProductType[];
  accessories: ProductType[];
  addToCard: (prod: ProductType) => void;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  handleLogin: () => {},
  handleLogout: () => {},
  data: [],
  useFetchAllProducts: () => ({ loading: false, products: [] }),
  brands: [],
  vintageClothes: [],
  accessories: [],
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
  const [vintageClothes, setVintageClothes] = useState<ProductType[]>([]);
  const [accessories, setAccessories] = useState<ProductType[]>([]);
  const [addItems, setAddedToCard] = useState<ProductType>();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("username");
      if (loggedInUser) {
        setUser({ email: loggedInUser });
      }
}, []);

  useEffect(() => {
        fetch("http://localhost:5001")
        .then((res) => res.json())
        .then((data) => {
            setData({
            ...data,
            products: {
                vintageClothes: {},
                accessories: {}
            }
        });
            // setUser(null)
        });
    }, []);

    useEffect(() => {
        fetch("http://localhost:5001/products")
        .then((res) => res.json())
        .then((products) => {
            setProducts(products);
        });
    }, []);

    const vintageClothesArrray: ProductType[] = [];
    const accessoriesArrray: ProductType[] = [];

   
    // products?.map((category) => {
    //     {if (category.category === 'vintageClothes') (
    //       vintageClothesArrray.push(category))
    //       setVintageClothes(vintageClothesArrray)
    //  }})


    // products?.map((category) => {
    //     {if (category.category === 'accessories') (
    //       accessoriesArrray.push(category))
    //       setAccessories(accessoriesArrray)
    //  }})

     Object.values(vintageClothes).forEach((product: ProductType) => {
              vintageClothesArrray.push(product);
              setVintageClothes(vintageClothesArrray)
            });

      Object.values(vintageClothes).forEach((product: ProductType) => {
              accessoriesArrray.push(product);
              setAccessories(accessoriesArrray)
            });
        
      


    useEffect(() => {
        fetch("http://localhost:5001/brands")
        .then((res) => res.json())
        .then((brands) => {
            setData(brands);
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
        vintageClothes,
        accessories,
        brands,
        useFetchAllProducts,
        addToCard
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextConstructor;
