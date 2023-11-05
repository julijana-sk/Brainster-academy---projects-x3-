import { UserContext } from "@/context/UserContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import '../pictures/icons/shopping cart.png'
import '../pictures/icons/heart-straight-thin.png'
import '../pictures/icons/user-light.png'





const Header: React.FC = () => {

  const { user, handleLogOut } = useContext(UserContext);

  
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
    <header>
      <div id="myNav" className="overlay">
      {/* <Link href="/" className="closebtn" onClick={openNav}>×</Link> */}
      <div className="overlay-content">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link"
              >Vintage облека<span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Брендови</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Аксесоари</a>
          </li>
          <li className="nav-item mr-4">
            <a className="nav-link">Lifestyle</a>
          </li>
          <li className="nav-item mr-4">
            <a className="nav-link">Подари картичка*</a>
          </li>
          <li className="nav-item mr-4">
            <a className="nav-link">Попуст</a>
          </li>
          <li className="nav-item mr-4">
            <Link href={"/"} className="nav-link"><img src="../pictures/icons/shopping cart.png" />Кошничка</Link>
          </li>
          <li className="nav-item mr-4">
            <Link href={"/"} className="nav-link"><img src="../pictures/icons/heart-straight-thin.png" />Омилени</Link>
          </li>
          <li className={pathname === "/login" ? "active-menu" : ""}>
            <Link href="/login" className="nav-link d-flex flex-row justify-content-start"><img src="../pictures/icons/user-light.png"/>
            { user ? <button onClick={handleLogOut} className="bg-danger">Logout</button> : <Link href="/login">
              <h3>Login</h3>
            </Link>
            }
            </Link>
          </li>
        </ul>
      </div>
    </div>

    <nav className="navbar navbar-light text-dark mb-3 p-3">
      <button
        className="navbar-toggler text-dark"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={openNav}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
        <Link href="/" className="navbar-brand m-0 text-center">
          <img
            src="../pictures/icons/Logo Igralishte final version 1.png"
            alt="logo-igralihste"
            className="w-75"/>
        </Link>
      {/* search */}
      <button className="btn-search" onClick={toggleSearchForm}>
        <img src="../pictures/icons/fluent_search-48-regular.png" alt="search icon" />
      </button>
    </nav> 

    {/* use show-modal-search class on this div to toggle the serch*/}
      <div className={`${toggleSearch ? "show-modal-search" : "" } modal-search-header flex-c-m trans-04 js-hide-modal-search pt-3`}>
        <div className="container-search-header">
          {/* close the search on this button on click */}
          <button className="btn-search flex-c-m btn-hide-modal-search trans-04" onClick={toggleSearchForm}>
            <img src="../pictures/icons/fluent_search-48-regular.png" alt="close" />
          </button>

          <form className="wrap-search-header flex-w p-l-15 align-items-center" onSubmit={handleSearchSubmit}>
            <button className="btn-search" type="submit">
              <i className="fas fa-chevron-left fa-1x text-light" />
            </button>
            <input className="plh3 p-0" type="search" value={searchState} onChange={event => setSearchState(event.target.value)} name="search" placeholder="Пребарувај..." />
          </form>
        </div>
      </div>
    </header>
  );


}

export default Header;
