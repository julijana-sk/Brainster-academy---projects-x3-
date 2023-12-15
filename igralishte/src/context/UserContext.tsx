import React, { createContext, useEffect, useState } from "react";
import { BrandType, DataType, ProductType } from "@/types/types";
import { useRouter } from "next/router";

interface UserContextType {
  user: {
    username: string;
    password: string
  } ;
  handleLogin: (username: string, password: string) => void;
  handleLogout: () => void;
  data: DataType[];
  brands: BrandType[];
  addToCard: (prod: ProductType) => void;
  useSortProductsByNewestDate: (products: ProductType[]) => void;
  useSortProductsByOldestDate: (products: ProductType[]) => void;
}

export const UserContext = createContext<UserContextType>({
  user: {username: "", password: ""},
  handleLogin: () => {},
  handleLogout: () => {},
  data: [],
  brands: [],
  addToCard: () => {},
  useSortProductsByNewestDate: () => {},
  useSortProductsByOldestDate: () => {}
});

interface Props {
  children: React.ReactNode;
}


const UserContextConstructor: React.FC<Props> = ({ children }) => {

  // const [user, setUser] = useState<UserContextType["user"]>({username: "", password: ""});
  const [user, setUser] = useState({ username: "", password: "" });
  const [data, setData] = useState<DataType[]>([]);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [brands, setBrands] = useState<BrandType[]>([]);
  const [addItems, setAddedToCard] = useState<ProductType>();
  const [sortedProducts, setSortedProducts] = useState<ProductType[]>([]);
   const [isSorted, setIsSorted] = useState(false);


//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("username") ?? "";
//     const loggedInPassword = localStorage.getItem("password") ?? "";

//     if (username === "igralishte" && password === "12345") {
//     localStorage.setItem("username", username);
//     localStorage.setItem("password", password);
//     setUser({ email: username, password: password });
// }
// }, []);
    
//     useEffect(() => {
//       fetch("http://localhost:5001/")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//         setUser({ email: "", password: "" })
//         });
//     }, []);

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
        localStorage.setItem("password", password);
        // setUser({ email: username, password: password });
    } else {
        alert('Incorrect username or password. Please try again.');
    }
};

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");

    setUser({ username: "", password: "" })

  };
 

    const useSortProductsByNewestDate = (products: ProductType[]) => {
      const sortProducts = (products: ProductType[]) => {
        return products.sort((a, b) => {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();
          return dateB - dateA;
        });
      };
      const sortedProducts = sortProducts(products);
      setSortedProducts(sortedProducts);
      setIsSorted(true);
      return sortedProducts;
  };


    const useSortProductsByOldestDate = (products: ProductType[]) => {
        const sortProducts = (products: ProductType[]) => {
            return products.sort((a, b) => {
                const dateA = new Date(a.date).getTime();
                const dateB = new Date(b.date).getTime();
                return dateA - dateB;
            });
        };
        const sortedProducts = sortProducts(products);
        setSortedProducts(sortedProducts);
        setIsSorted(true);

        return sortedProducts;
    };

    
  return (
    <UserContext.Provider value={{ 
        user, 
        handleLogin, 
        handleLogout,
        data,
        brands,
        addToCard,
        useSortProductsByNewestDate,
        useSortProductsByOldestDate
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextConstructor;
