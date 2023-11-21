import { DataType } from "@/types/types";
import React, { createContext, useEffect, useState } from "react";

interface UserContextType {
  user: {
    email: string;
  } | null,
  handleLogIn: (username: string, password: string) => void,
  handleLogOut: () => void,
  data: DataType[];
}

export const UserContext = createContext<UserContextType>({
  user: null,
  handleLogIn: () => {},
  handleLogOut: () => {},
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

  return (
    <UserContext.Provider value={{ 
        user, 
        handleLogIn, 
        handleLogOut,
        data
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextConstructor;
