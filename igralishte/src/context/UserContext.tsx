import { BrandType, DataType, ProductType } from "@/types/types";
import React, { createContext, useEffect, useState } from "react";

interface UserContextType {
  user: {
    email: string;
  } | null;
  handleLogin: (username: string, password: string) => void;
  handleLogout: () => void;
  handleArrowClick: (direction: string, clickedPage: any) => void;
  handleClick: (pageNumber: number) => void;
  data: DataType[];
  brands: BrandType[];
  addToCard: (prod: ProductType) => void;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  handleLogin: () => {},
  handleLogout: () => {},
  handleArrowClick: () => {},
  handleClick: () => {},
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(brands.length / 10);


    // useEffect(() => {
    //     const indexOfLastProduct = currentPage * 10;
    //     const indexOfFirstProduct = indexOfLastProduct - 10;
    //     const currentProducts = brands.slice(indexOfFirstProduct, indexOfLastProduct);

    //     setBrands(currentProducts);
    // }, [currentPage]);


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
  
  const handleArrowClick = (direction: string, clickedPage: any) => {
        if (direction === 'previous') {
            setCurrentPage(currentPage - 1);
        } else {
            setCurrentPage(currentPage + 1);
        }
        handleClick(clickedPage);
    };

    const handleClick = (pageNumber: number) => {
     if (pageNumber === currentPage) {
        return;
        }
        setCurrentPage(pageNumber);
    };



  return (
    <UserContext.Provider value={{ 
        user, 
        handleLogin, 
        handleLogout,
        data,
        brands,
        addToCard,
        handleArrowClick,
        handleClick,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextConstructor;
