import React, { useState } from 'react'
import PrimaryBtn from './PrimaryBtn'
import Link from 'next/link'

// interface Props {
//   onClick: () => void

// }
// const RegisterForm1: React.FC<Props> = ({onClick}) => {

//   const [view, setView] = useState("register");

//   return (
//       <form className="d-flex flex-column justify-content-center"
//           onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
//           event.preventDefault();
//           }}>
//           <div className='text-center mb-5'>
//             <PrimaryBtn btnClass={"SecondaryBtn w-100"} onClick={() => setView("register2")} img={require("../pictures/icons/google.png")} title="Регистрирај се со емаил адреса" backgroundColor={"transparent"} color='black' height="40px" border='3px solid #FFDBDB'/>
            
//             <p className='text-center my-4'>или</p>
//             <PrimaryBtn btnClass={"SecondaryBtn w-100"} img={require("../pictures/icons/google.png")} title="Најави се преку Google" backgroundColor={"transparent"} color='black' height="40px" border='3px solid #FFDBDB'/>
//             <PrimaryBtn btnClass={"SecondaryBtn w-100"}  img={require("../pictures/icons/facebook.png")} title="Најави се преку Facebook" backgroundColor={"transparent"} color='black' height="40px" border='3px solid #FFDBDB'/>
//             <Link href="/login"><p className='mr-2 mt-4 mb-5 text-dark font-weight-bold'>Веќе имаш профил? <span style={{color: "#8A8328", textDecoration: "underline"}}> Логирај се</span></p></Link>
//           </div>

//           <p className='note'>Сите права задржани @ Игралиште Скопје</p>
//       </form>
//   );

// }

// export default RegisterForm1;