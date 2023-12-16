import React, { createContext, useEffect, useState } from "react";
import { BrandType, DataType, ProductType } from "@/types/types";
import { useRouter } from "next/router";

interface UserContextType {
  data: DataType[];
  brands: BrandType[];
  addToCard: (prod: ProductType) => void;
  useSortProductsByNewestDate: (products: ProductType[]) => void;
  useSortProductsByOldestDate: (products: ProductType[]) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UserContext = createContext<UserContextType>({
  data: [],
  brands: [],
  addToCard: () => {},
  useSortProductsByNewestDate: () => {},
  useSortProductsByOldestDate: () => {},
  handleChange: () => {},
});

interface Props {
  children: React.ReactNode;
}

const UserContextConstructor: React.FC<Props> = ({ children }) => {
    const [data, setData] = useState<DataType[]>([]);
    const [products, setProducts] = useState<ProductType[]>([]);
    const [brands, setBrands] = useState<BrandType[]>([]);
    const [addedToCard, setAddedToCard] = useState<ProductType>();
    const [sortedProducts, setSortedProducts] = useState<ProductType[]>([]);
    const [isSorted, setIsSorted] = useState(false);
    const [userValue, setUserValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [name, setName] = useState<string>("");
    const [surname, setSurname] = useState<string>("");;
    const [address, setAddress] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [biography, setBiography] = useState<string>("");


    useEffect(() => {
      fetch("http://localhost:5001/")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
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
      const updatedProducts = products.map((p) => {
        if (p.id === prod.id) {
          return {
            ...p,
            selected: !p.selected,
            amount: p.selected ? 0 : 1,
          };
        }
        return p;
      });
      setProducts(updatedProducts);
      setAddedToCard(prod);
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


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserValue(event.target.value);
    setPasswordValue(event.target.value);
    setName(event.target.value);
    setSurname(event.target.value);
    setAddress(event.target.value);
    setPhone(event.target.value);
    setBiography(event.target.value);
  };


  return (
      <UserContext.Provider value={{ 
          data,
          brands,
          addToCard,
          useSortProductsByNewestDate,
          useSortProductsByOldestDate,
          handleChange
        }}>
        {children}
      </UserContext.Provider>
  );
};

export default UserContextConstructor;