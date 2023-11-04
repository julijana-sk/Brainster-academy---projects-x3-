import { UserContext } from "@/context/UserContext";
import Link from "next/link";
import React, { useContext } from "react";

interface Props {
  children: React.ReactNode;
}

const Authentication: React.FC<Props> = ({ children }) => {
  
  const { user } = useContext(UserContext);

  if (!user) {
    return <Link href="/login" />;
  }

  return <div>{children}</div>;
};

export default Authentication;
