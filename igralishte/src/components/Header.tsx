import React, { useContext, useState } from "react";
import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/router";
import Link from "next/link";
import MenuList from "./MenuList";


const Header: React.FC = () => {

  const { user, handleLogOut, handleLogIn, data } = useContext(UserContext);

  
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


  // return (
    // <>
    // <header>
      {/* <div id="myNav" className={toggleNav ? "overlay" : ""}>
      <div className="overlay-content">
        <ul className="navbar-nav">
          <li>
            <MenuList data={data}/>
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
    </div> */}

    {/* <nav className="navbar navbar-light text-dark mb-3 p-3">
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
      <div id="myNav" className={toggleNav ? "overlay" : ""}>
      <div className="overlay-content">
        <ul className="navbar-nav">
          <li> */}
            {/* <MenuList data={data}/> */}
          {/* </li>
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
        <Link href="/" className="navbar-brand m-0 text-center">
          <img
            src="../pictures/icons/Logo Igralishte final version 1.png"
            alt="logo-igralihste"/>
        </Link> */}
      {/* search */}
      {/* <button className="btn-search" onClick={toggleSearchForm}>
        <img src="../pictures/icons/fluent_search-48-regular.png" alt="search icon" />
      </button>
    </nav>  */}

    {/* use show-modal-search class on this div to toggle the serch*/}
      {/* <div className={`${toggleSearch ? "show-modal-search" : "" } modal-search-header flex-c-m trans-04 js-hide-modal-search pt-3`}>
        <div className="container-search-header">
          <form className="wrap-search-header flex-w p-l-15 align-items-center" onSubmit={handleSearchSubmit}>
            <button className="btn-search" type="submit">
              <i className="fas fa-chevron-left fa-1x" style={{color: "lightgrey"}}/>
            </button>
            <input className="plh3 p-2" type="search" value={searchState} onChange={event => setSearchState(event.target.value)} name="search" placeholder="Пребарувај..." />
            <button className="btn-search flex-c-m btn-hide-modal-search trans-04" onClick={toggleSearchForm}>
            <img src="../pictures/icons/fluent_search-48-regular.png" alt="close" />
          </button>
          </form>
        </div>
      </div>
    </header>
    </>
  );


}

export default Header; */}

const categories = data.map((item) => item.Category);

return (
    <div >
      <div className="container text-dark p-3">
          <div onClick={openNav}>
            <div
              className={toggleNav ? "activeHamburger" : "hamburber"}
            />
          </div>
          <Link href="/" className="navbar-brand m-0 text-center">
          <img
            src="../pictures/icons/Logo Igralishte final version 1.png"
            alt="logo-igralihste"/>
        </Link>
      {/* search */}
      <button className="btn-search" onClick={toggleSearchForm}>
        <img src="../pictures/icons/fluent_search-48-regular.png" alt="search icon" />
      </button>

    {/* use show-modal-search class on this div to toggle the serch*/}
      <div className={`${toggleSearch ? "show-modal-search" : "" } modal-search-header flex-c-m trans-04 js-hide-modal-search pt-3`}>
        <div className="container-search-header">
          <form className="wrap-search-header flex-w p-l-15 align-items-center" onSubmit={handleSearchSubmit}>
            <button className="btn-search" type="submit">
              <i className="fas fa-chevron-left fa-1x" style={{color: "lightgrey"}}/>
            </button>
            <input className="plh3 p-2" type="search" value={searchState} onChange={event => setSearchState(event.target.value)} name="search" placeholder="Пребарувај..." />
            <button className="btn-search flex-c-m btn-hide-modal-search trans-04" onClick={toggleSearchForm}>
            <img src="../pictures/icons/fluent_search-48-regular.png" alt="close" />
          </button>
          </form>
        </div>
      </div>
    </div>
      <div className={toggleNav ? "activeSidenav" : "sidenav"}>
        <ul className="ul">
          {categories.map((category, index) => (
            <li key={index}>
              <a className="a">{JSON.stringify(category)}</a>
            </li>
          ))}
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
  );
};

export default Header;
