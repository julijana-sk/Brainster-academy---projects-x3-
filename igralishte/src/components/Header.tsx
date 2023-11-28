import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/router";
import Link from "next/link";
import BrandsPicker from "./BrandsPicker";
import { BrandType, ProductType } from "@/types/types";
import BrandItem from "./BrandsPicker";



const Header: React.FC = () => {

  const { user, handleLogOut, handleLogIn, data, brands, useFetchAllProducts} = useContext(UserContext);

  const [products, setProducts] = useState<ProductType[]>([]);
 
  const {pathname, push} = useRouter();
  const router = useRouter();
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);

  const [searchState, setSearchState] = useState("");


  useEffect(() => { useFetchAllProducts});

  const handleSearchSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      router.push({
        pathname: "/search",
        query: { query: searchState },
        });
      setSearchState("");
      setToggleSearch(false);
  }

  const toggleSearchForm = () => {
      setToggleSearch(!toggleSearch);
  };

  const handleToggleNav = () => {
    setToggleNav(!toggleNav);
  }

return (
    <div className="px-4 py-3">
      <div className="container text-dark pl-2 pr-0">
          <div onClick={handleToggleNav} className={toggleNav ? "activeHamburger" : "hamburber"} />
          <Link href={"/"} className="navbar-brand m-0 text-center">
          <img src="../pictures/icons/Logo Igralishte final version 1.png" alt="logo"/>
          </Link>
      {/* search */}
      <button className="btn-search p-0" onClick={toggleSearchForm}>
        <img src="../pictures/icons/fluent_search-48-regular.png" alt="search icon" />
      </button>

    {/* show-modal-search class on this div for  toggle the search button*/}
      <div className={`${toggleSearch ? "show-modal-search" : "" } modal-search-header flex-c-m trans-04 js-hide-modal-search pt-3`}>
        <div className="container-search-header">
          <form className="wrap-search-header flex-w p-l-15 align-items-center" onSubmit={handleSearchSubmit}>
            <button className="btn-search px-3" type="submit">
              <i className="fas fa-chevron-left fa-1x" style={{color: "lightgrey"}}/>
            </button>
            <input className="plh3 p-2" type="search" value={searchState} onChange={event => setSearchState(event.target.value)} name="search" placeholder="Пребарувај..." />
            <button className="btn-search flex-c-m btn-hide-modal-search trans-04 p-0" onClick={toggleSearchForm}>
            <img src="../pictures/icons/fluent_search-48-regular.png" alt="search close btn" />
          </button>
          </form>
        </div>
      </div>
    </div>
      <button className={toggleNav ? "activeSidenav" : "sidenav"} onClick={handleToggleNav}>
        {toggleNav && (
        <ul className="menu">
          {/* <li>
            {Object.keys(data).map((category, index) => {
              return (
                <div key={index}>{Object.values(category).map((element, index) => {                 
                  return (
                    <div key={index}>{element}</div>
                  )
                })}</div>
              )
            })}
          </li> */}
                <li className="dropdown">
                  <p className="btn btn-secondary dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="false">
                    Vintage Clothes
                  </p>
                  <div className="dropdown-menu">
                    <p className="dropdown-item" >Сите</p>
                    <p className="dropdown-item" >Блузи</p>
                    <p className="dropdown-item" >Пантолони</p>
                  </div>
                </li>
                <li className="dropdown">
                  <p className="btn btn-secondary dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="false">
                    Accessories
                  </p>
                  <div className="dropdown-menu">
                    <p className="dropdown-item" >Сите</p>
                    <p className="dropdown-item" >Ташни</p>
                    <p className="dropdown-item" >Накит</p>
                  </div>
                </li>
                <li className="dropdown">
                  <p className="btn btn-secondary dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="false">
                    Брендови
                  </p>
                  <div className="dropdown-menu">
                    <p className="dropdown-item" >Сите</p>
                    <p className="dropdown-item" >Зш да не</p>
                    <p className="dropdown-item" >Нежно</p>
                  </div>
                </li>
         
    
          <div className="menu-footer">
            <li className="nav-item ">
              <Link href={"/gifts"} >link to gifts</Link>
              <Link href={"/"} className="nav-link d-flex flex-row justify-content-start">
                <button className="menu-footer-button"><img src="../pictures/icons/shopping cart.png" /> </button>
                {/* <button className="menu-footer-button"><img src={require("../pictures/icons/Logo Igralishte final version 1.png")} /> </button> */}

                <p>Кошничка</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/"} className="nav-link d-flex flex-row justify-content-start">
                <button className="menu-footer-button"><img src="../pictures/icons/heart-straight-thin.png" /> </button>
                {/* <button className="menu-footer-button"><img src="../pictures/icons/heart-straight-thin.png")} /> </button> */}

                <p>Омилени</p>
              </Link>
            </li>
            <li className={pathname === "/login" ? "active-menu" : ""}>
            <li className="nav-item">
              <div className="nav-link d-flex flex-row justify-content-start">
                <button className="menu-footer-button"><img src="../pictures/icons/user-light.png" /></button>
                <button className="menu-footer-button"><img src="../pictures/icons/user-light.png" /></button>

                {user ? (
                <button onClick={handleLogOut}><Link href={"/profile"}> Мој профил </Link></button>
                  ) : (
                    <Link href="/login">Регистрирај се/Логирај се</Link>
                  )}
              </div>
              </li>
            </li>
          </div>
        </ul>
         )}
      </button>
    </div>
  );
};

export default Header;
