import React, { useContext, useState } from 'react'
import {UserContext} from '@/context/UserContext';
import PrimaryBtn from './PrimaryBtn'
import Link from 'next/link'
import { useRouter } from 'next/router';


// interface Props {
//   onClick: () => void;
// }
// const LoginForm: React.FC<Props> = ({onClick}) => {

//   // const router = useRouter();
//   const {  handleLogin } = useContext(UserContext);
//   const [username, setUsername] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
 


 
//   return (
//       // <form className="d-flex flex-column justify-content-center"
//       //       onSubmit={() => {
//       //           router.push({
//       //           pathname: "/",
//       //             });
//       //       handleLogin(username, password);
//       //       }}>
//       <>          <label htmlFor="username">Email адреса</label>
//           <input type="email" id="username" className="SecondaryBtn" style={{fontWeight: "lighter"}} placeholder="igralishte@hotmail.com" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
//               setUsername(event.target.value);
//               }}/>
              
//           <label htmlFor="password">Лозинка</label>
//           <input type="password" id="password" className="SecondaryBtn mb-3" style={{fontWeight: "lighter"}} placeholder="12345" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
//               setPassword(event.target.value);
//               }} /> 

//           <Link href="/login"><p style={{color: "#8A8328", textDecoration: "underline", marginBottom: '20px'}}>Ја заборави лозинката?</p></Link>

//           <div className='text-center mb-5'>
//             <PrimaryBtn title="Најави се" onClick={() => handleLogin} btnClass={"PrimaryBtn w-100"} backgroundColor={"black"} color='white' border='none' height='40px' />
//             <p className='text-center my-4'>или</p>
//             <PrimaryBtn btnClass={"SecondaryBtn w-100"} img="../pictures/icons/google.png" title="Најави се преку Google" backgroundColor={"transparent"} color='black' height="40px" border='3px solid #FFDBDB'/>
//             <PrimaryBtn btnClass={"SecondaryBtn w-100"}  img="../pictures/icons/facebook.png" title="Најави се преку Facebook" backgroundColor={"transparent"} color='black' height="40px" border='3px solid #FFDBDB'/>
//             <Link href="/register"><p className='mr-2 mt-4 mb-5 text-dark font-weight-bold'>Немаш профил? <span style={{color: "#8A8328", textDecoration: "underline"}}> Регистрирај се</span></p></Link>
//             <p className='p-0 note'>Сите права задржани @ Игралиште Скопје</p>
//           </div>
//       </>

//   );
// }

// export default LoginForm;