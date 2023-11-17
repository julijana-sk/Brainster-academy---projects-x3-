import React, { useContext, useState } from "react";
import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/router";
import Link from "next/link";



const Header: React.FC = () => {

  const { user, handleLogOut, handleLogIn, data} = useContext(UserContext);

  // console.log(data)

 
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
    <div className="px-3 py-2">
      <div className="container text-dark p-0">
          <div onClick={openNav} className={toggleNav ? "activeHamburger" : "hamburber"} />
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
      <div className={toggleNav ? "activeSidenav" : "sidenav"}>
        <ul className="menu">
          <li>
          {/* {data?.categories?.map((item, index) => (
            <li key={index}>
              <CategoryItems category={item}/>
              <ul>
                {item.subs.map((sub) => (
                  <li key={sub.type}>
                  <Link href={`/category/${item.category}/${sub.type}`}>
                      {sub.type}
                  </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))} */}
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
              <div className="nav-link d-flex flex-row justify-content-start">
                <button className="menu-footer-button"><img src="../pictures/icons/user-light.png" /></button>
                {/* <button className="menu-footer-button"><img src="../pictures/icons/user-light.png")} /></button> */}

                {user ? (
                <button onClick={handleLogOut}><Link href={"/profile"}> Мој профил </Link></button>
                  ) : (
                    <Link href="/login">Регистрирај се/Логирај се</Link>
                  )}
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
