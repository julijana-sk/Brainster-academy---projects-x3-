import React, { useContext, useState } from 'react'
import {UserContext} from '@/context/UserContext';
import PrimaryBtn from './PrimaryBtn'
import Link from 'next/link'


// interface Props {
//   view2: string
//   onClick: () => void
// }
const RegisterForm2: React.FC = () => {

  const [view, setView] = useState("register2");

  const { handleLogIn } = useContext(UserContext);
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");


  return (
      <form className="d-flex flex-column justify-content-center"
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          handleLogIn(username, password);
          }}>

          <div className='container-fluid mt-5 text-center'>
            <div className='row d-flex flex-column justify-content-center'>
              <div className='col-12 mt-5'>
                <Link href={"/"}><img src="../pictures/icons/Logo Igralishte final version.png" alt="logo-igralishte" /></Link>
                <div className='col-12 mt-5 mb-3 text-center'>
                  <img src="../pictures/Profile-picture.png" alt="profile picture" />
                  </div>
                  <div className='col-12 mb-3 text-center'>
                  <button className='btnProfilePicture small p-0 px-2 border-0'>Одбери слика</button>
                </div>
              </div>
              <div className='mb-3 col-11 px-4 text-left mr-auto ml-auto'>
              <div className='d-flex flex-column justify-content-left'>
                <label htmlFor="name">Име</label>
                <input type="text" id="name" className="PrimaryBtn form-input" placeholder="Ивана" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setName(event.target.value);
                    }}/>
              </div>
              <div className='d-flex flex-column justify-content-left'>
                <label htmlFor="surname">Презиме</label>
                <input type="text" id="surname" className="PrimaryBtn form-input" placeholder="Голабоска" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setSurname(event.target.value);
                    }}/>
              </div>
              <div className='d-flex flex-column justify-content-left'>
                <label htmlFor="username">Email адреса</label>
                <input type="email" id="username" className="PrimaryBtn form-input" placeholder="example@example.com" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setUsername(event.target.value);
                  }}/>
              </div>
              <div className='d-flex flex-column justify-content-left'>
              <label htmlFor="password">Повтори лозинка</label>
              <input type="password" id="password" className="PrimaryBtn form-input" placeholder="********" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setPassword(event.target.value);
                  }} /> 
              </div>
              
              
              <Link href="/register3"><PrimaryBtn title="Регистрирај се"  btnClass={"PrimaryBtn w-75"} backgroundColor={"black"} color='white' height={"40px"} border='none'/></Link>
              
              <p className='note'>Со вашата регистрација, се согласувате со Правилата и Условите за кориснички сајтови.</p>
              </div>
            </div>
          </div>
      </form>
    );

}

export default RegisterForm2;