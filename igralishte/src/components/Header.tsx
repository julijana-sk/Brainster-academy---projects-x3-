import React, { useContext, useState } from "react";
import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/router";
import Link from "next/link";
import MenuList from "./MenuList";




const Header: React.FC = () => {

  const { user, handleLogOut, handleLogIn, data } = useContext(UserContext);

  console.log(data)


  
  const {pathname, push} = useRouter();
  const router = useRouter();
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);

  const [searchState, setSearchState] = useState("");



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

  const openNav = () => {
    setToggleNav(!toggleNav);
  }

return (
    <div className="p-3">
      <div className="container text-dark p-0">
          <div onClick={openNav} className={toggleNav ? "activeHamburger" : "hamburber"} />
          <Link href={"/"} className="navbar-brand m-0 text-center">
          <img src={require("../pictures/icons/Logo Igralishte final version 1.png")}
            alt="logo-igralihste"/>
        </Link>
      {/* search */}
      <button className="btn-search" onClick={toggleSearchForm}>
        <img src={require("../pictures/icons/fluent_search-48-regular.png")} alt="search icon" />
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
            <img src={require("../pictures/icons/fluent_search-48-regular.png")} alt="search close btn" />
          </button>
          </form>
        </div>
      </div>
    </div>
      <div className={toggleNav ? "activeSidenav" : "sidenav"}>
        <ul className="ul">
          {/* {Object.values(data)?.map((item, index) => ( */}
            <li>
              {data.map((product, index) => {
                return (
                <MenuList key={index}/>
                    )
              })
            }
            </li>
          {/* ))} */}
          <div className="menu-footer">
            <li className="nav-item ">
              <Link href={"/"} className="nav-link d-flex flex-row justify-content-start">
                <button className="menu-footer-button"><img src={require("../pictures/icons/shopping cart.png")} /> </button>
                <p>Кошничка</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/"} className="nav-link d-flex flex-row justify-content-start">
                <button className="menu-footer-button"><img src={require("../pictures/icons/heart-straight-thin.png")} /> </button>
                <p>Омилени</p>
              </Link>
            </li>
            <li className={pathname === "/login" ? "active-menu" : ""}>
              <div className="nav-link d-flex flex-row justify-content-start">
                <button className="menu-footer-button"><img src={require("../pictures/icons/user-light.png")} /></button>
                { user ? <Link onClick={handleLogOut} href={"/profile"} className="bg-transparent menu-footer border-0"><p>Мој профил</p></Link> 
                : <Link href={"/login"}><p>Регистрирај се/Логирај се</p> 
                </Link>}
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
