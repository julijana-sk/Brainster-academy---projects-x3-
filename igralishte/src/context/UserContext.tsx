import React, { createContext, useState } from "react";

interface UserContextType {
  user: {
    email: string;
  } | null;
  handleLogIn: (username: string, password: string) => void;
  handleLogOut: () => void;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  handleLogIn: () => {},
  handleLogOut: () => {},
});

interface Props {
  children: React.ReactNode;
}

const UserContextConstructor: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<UserContextType["user"]>({
    email: "igralishte@hotmail.com",
  });

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
        handleLogOut 
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextConstructor;
