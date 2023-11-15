import React, { useContext, useState } from 'react'
import {UserContext} from '@/context/UserContext';
import PrimaryBtn from './PrimaryBtn'
import Link from 'next/link'

const LoginForm = () => {

  const { handleLogIn } = useContext(UserContext);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");


  return (
      <form className="d-flex flex-column justify-content-center"
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          handleLogIn(username, password);
          }}>

          <label htmlFor="username">Email адреса</label>
          <input type="email" id="username" className="PrimaryBtn" style={{fontWeight: "lighter"}} placeholder="igralishte@hotmail.com" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setUsername(event.target.value);
              }}/>
              
          <label htmlFor="password">Лозинка</label>
          <input type="password" id="password" className="PrimaryBtn" style={{fontWeight: "lighter"}} placeholder="12345" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(event.target.value);
              }} /> 

          <Link href="/login"><p style={{color: "#8A8328", textDecoration: "underline"}}>Ја заборави лозинката?</p></Link>

          <div className='text center mb-5'>
            <PrimaryBtn title="Најави се" btnClass={"PrimaryBtn"} backgroundColor={"black"} color='white' border='none' height='40px'/>
            <p className='text-left ml-5 pl-5 my-4'>или</p>
            <PrimaryBtn btnClass={"SecondaryBtn"} img={require("../pictures/icons/google.png")} title="Најави се преку Google" backgroundColor={"transparent"} color='black' height="40px" border='3px solid #FFDBDB'/>
            <PrimaryBtn btnClass={"SecondaryBtn"}  img={require("../pictures/icons/facebook.png")} title="Најави се преку Facebook" backgroundColor={"transparent"} color='black' height="40px" border='3px solid #FFDBDB'/>
            <Link href="/login"><p className='mr-2 mt-4 mb-5 text-dark font-weight-bold'>Немаш профил? <span style={{color: "#8A8328", textDecoration: "underline"}}> Регистрирај се</span></p></Link>
          </div>

          <p style={{fontSize: "8px", paddingLeft: "9%", fontFamily: "Inter"}}>Сите права задржани @ Игралиште Скопје</p>
      </form>
  );
}

export default LoginForm;