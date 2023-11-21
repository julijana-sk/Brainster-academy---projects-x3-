import React, { useContext, useState } from 'react'
import {UserContext} from '@/context/UserContext';
import PrimaryBtn from './PrimaryBtn'
import Link from 'next/link'

// interface Props {
//   view3: string
// }
// const RegisterForm3: React.FC = () => {

//   const [view, setView] = useState("register3");


//   const { handleLogIn } = useContext(UserContext);
//   const [address, setAddress] = useState<string>("");
//   const [phone, setPhone] = useState<string>("");
//   const [biography, setBiography] = useState<string>("");


//   return (
//       <form className="d-flex flex-column justify-content-center"
//           onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
//           event.preventDefault();
//           }}>

//           <div className='container-fluid mt-5 text-center'>
//             <div className='row d-flex flex-column justify-content-center'>
//               <div className='col-12 mt-5'>
//                 <Link href={"/"}><img src="../pictures/icons/Logo Igralishte final version.png" alt="logo-igralishte" /></Link>
//                 <div className='col-12 mt-5 mb-3 text-center'>
//                   <img src="../pictures/Profile-picture.png" alt="profile picture" />
//                   </div>
//                   <div className='col-12 mb-3 text-center'>
//                   <button className='btnProfilePicture small p-0 px-2 border-0'>Одбери слика</button>
//                 </div>
//               </div>
//               <div className='mb-3 col-11 px-4 text-left mr-auto ml-auto'>
//               <div className='d-flex flex-column justify-content-left'>
//                 <label htmlFor="address">Адреса</label>
//                 <input type="text" id="address" className="PrimaryBtn form-input" placeholder="example@example.com" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
//                     setAddress(event.target.value);
//                     }}/>
//               </div>
//               <div className='d-flex flex-column justify-content-left'>
//                 <label htmlFor="phone">Телефонски број</label>
//                 <input type="text" id="phone" className="PrimaryBtn form-input" placeholder="example@example.com" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
//                     setPhone(event.target.value);
//                     }}/>
//               </div>
//               <div className='d-flex flex-column justify-content-left'>
//                 <label htmlFor="biography">Биографија</label>
//                 <input type="textarea" id="biography" className="PrimaryBtn w-100 p-3 text-left" style={{fontWeight: "lighter", height: "80px" }} placeholder="example@example.com" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
//                     setBiography(event.target.value);
//                     }}/>
//               </div>
//                 <div className="input-group my-3">
//                   <div className="input-group-prepend">
//                     <div className="input-group-text border-0 bg-transparent px-1">
//                       <input type="checkbox" aria-label="Checkbox for following text input"/>
//                     </div>
//                   </div>
//                   <input type='text' style={{fontSize: "10px", fontFamily: "Inter"}} className="form-control border-0" aria-label="Text input with checkbox" placeholder='Испраќај ми известувања за нови зделки и промоции.'/>
//                 </div>
//               <Link href="/"><PrimaryBtn title="Заврши" onClick={() => {handleLogIn}} btnClass={"PrimaryBtn w-75"} backgroundColor={"black"} color='white' height={"40px"} border='none'/></Link>
              
//               <Link href="/login"><p style={{color: "black", textDecoration: "underline"}}>Прескокни</p></Link>
//               </div>
//             </div>
//           </div>
//       </form>
//     );

// }

// export default RegisterForm3;