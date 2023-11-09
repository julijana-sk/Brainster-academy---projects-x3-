import React, { useContext, useState } from "react";
import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/router";
import Link from "next/link";
import MenuList from "./MenuList";
import { DataType } from "@/types/types";


interface Props {
  data: DataType[];
}

const Header: React.FC<Props> = ({data}) => {

  const { user, handleLogOut, handleLogIn } = useContext(UserContext);

  
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
          <li className="nav-item">
            <Link href={"/"} className="nav-link"><img src="../pictures/icons/shopping cart.png" />Кошничка</Link>
          </li>
          <li className="nav-item">
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
          <li className="nav-item">
            <Link href={"/"} className="nav-link"><img src="../pictures/icons/shopping cart.png" />Кошничка</Link>
          </li>
          <li className="nav-item">
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

// const categories = data.map((item) => item.Category);

return (
    <div className="p-3">
      <div className="container text-dark p-0">
          <div onClick={openNav} className={toggleNav ? "activeHamburger" : "hamburber"} />
          <Link href={"/"} className="navbar-brand m-0 text-center">
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
            <button className="btn-search px-3" type="submit">
              <i className="fas fa-chevron-left fa-1x" style={{color: "lightgrey"}}/>
            </button>
            <input className="plh3 p-2" type="search" value={searchState} onChange={event => setSearchState(event.target.value)} name="search" placeholder="Пребарувај..." />
            <button className="btn-search flex-c-m btn-hide-modal-search trans-04 p-0" onClick={toggleSearchForm}>
            <img src="../pictures/icons/fluent_search-48-regular.png" alt="close" />
          </button>
          </form>
        </div>
      </div>
    </div>
      <div className={toggleNav ? "activeSidenav" : "sidenav"}>
        <ul className="ul">
          {data?.map((item, index) => (
            <li key={index}>
            <MenuList data={data} />
            </li>
          ))}
          <div className="menu-footer">
            <li className="nav-item ">
              <Link href={"/"} className="nav-link d-flex flex-row justify-content-start">
                <button className="menu-footer-button"><img src="../pictures/icons/shopping cart.png" /></button>
                <p>Кошничка</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/"} className="nav-link d-flex flex-row justify-content-start">
                <button className="menu-footer-button"><img src="../pictures/icons/heart-straight-thin.png" /></button>
                <p>Омилени</p>
              </Link>
            </li>
            <li className={pathname === "/login" ? "active-menu" : ""}>
              <Link href="/login" className="nav-link d-flex flex-row justify-content-start">
                <button className="menu-footer-button"><img src="../pictures/icons/user-light.png"/></button>
              { user ? <button onClick={handleLogOut} className="bg-transparent menu-footer border-0"><Link href="/profile"><p>Мој профил</p></Link></button> : <Link href="/login">
                <p>Регистрирај се/Логирај се</p>
              </Link>
              }
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
