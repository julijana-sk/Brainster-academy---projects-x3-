import React, { useContext, useState } from 'react'
import Btn from './Btn'
import Link from 'next/link'
import {UserContext} from '@/context/UserContext';

const LoginForm = () => {

  const { user, handleLogIn } = useContext(UserContext);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");


  return (
    <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleLogIn(username, password);
        }}>

        <label htmlFor="username">Email адреса</label>
        <input type="text" id="username" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setUsername(event.target.value);
            }}/>
            
        <label htmlFor="password">Лозинка</label>
        <input type="password" id="password" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(event.target.value);
            }} /> 

        <Link href="/login"><a>Ја заборави лозинката?</a></Link>

        <Btn title="Најави се"/>
    </form>
  );
}

export default LoginForm