import { UserContext } from "@/context/UserContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";


const Header: React.FC = () => {

  const { user, handleLogOut } = useContext(UserContext);

  
  const {pathname, push} = useRouter();
  const router = useRouter();
  const [toggleSearch, setToggleSearch] = useState(false);
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

  return (
    <>
      <header className="header-v4">
        <div className="container-menu-desktop ">
          <div className="wrap-menu-desktop how-shadow1">
            <nav className="limiter-menu-desktop container">
              <Link href="/">
                <img src="../pictures/icons/sparks-elements-and-symbols-isolated-on-white-background-free-vector 5.png" />   
              </Link>

              <div className="menu-desktop">
                <ul className="main-menu">
                  <li className={pathname === "/" ? "active-menu" : ""}>
                    <Link href="/">
                      <h3>Home</h3>
                    </Link>
                  </li>

                    <li className={pathname === "/shop" ? "active-menu" : ""}>
                    <Link href="/shop">
                      <h3>Shop</h3>
                    </Link>
                  </li>

                    <li className={pathname === "/blog" ? "active-menu" : ""}>
                    <Link href="/blog">
                      <h3>Blog</h3>
                    </Link>
                  </li>

                    <li className={pathname === "/about" ? "active-menu" : ""}>
                    <Link href="/about">
                      <h3>About</h3>
                    </Link>
                  </li>
                  <li className={pathname === "/login" ? "active-menu" : ""}>
                    { user ? <button onClick={handleLogOut}>Logout</button> : <Link href="/login">
                      <h3>Login</h3>
                    </Link>
                    }
                  </li>
                </ul>
              </div>

              <div className="wrap-icon-header flex-w flex-r-m h-full">
                <div className="flex-c-m h-full p-r-24">
                  {/* make a click event listener on this div to show the search */}
                  <div className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11" onClick={toggleSearchForm}>
                    <i className="zmdi zmdi-search"></i> 
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* use show-modal-search class on this div to toggle the serch*/}
        <div className={`${toggleSearch ? "show-modal-search" : "" } modal-search-header flex-c-m trans-04 js-hide-modal-search`}>
          <div className="container-search-header">
            {/* close the search on this button on click */}
            <button className="flex-c-m btn-hide-modal-search trans-04" onClick={toggleSearchForm}>
              <img src="images/icons/icon-close2.png" alt="CLOSE" />
            </button>

            <form className="wrap-search-header flex-w p-l-15" onSubmit={handleSearchSubmit}>
              <button className="flex-c-m trans-04" type="submit">
                <i className="zmdi zmdi-search"></i>
              </button>
              <input className="plh3" type="search" value={searchState} onChange={event => setSearchState(event.target.value)} name="search" placeholder="Search..." />
            </form>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
