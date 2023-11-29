import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/router";
import Link from "next/link";
import { ProductType } from "@/types/types";


const Header: React.FC = () => {

  const { user, handleLogOut, handleLogIn, data, vintageClothes, accessories, brands, useFetchAllProducts} = useContext(UserContext);

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
      <div className="container flex-row justify-content-between text-dark pl-2 pr-0">
          <button onClick={handleToggleNav} className="hamburger-btn" >
            <p className={toggleNav ? "activeHamburger" : "hamburber"} />
            <p className={toggleNav ? "activeHamburger-top" : "hamburber-top"} />
            <p className={toggleNav ? "activeHamburger-bottom" : "hamburber-bottom"} />
          </button>
          <Link href={"/"} className="navbar-brand m-0 text-center">
          <img src="../pictures/icons/Logo Igralishte final version 1.png" alt="logo"/>
          </Link>
          <button className="btn-search p-0" onClick={toggleSearchForm}>
            <img src="../pictures/icons/fluent_search-48-regular.png" alt="search icon" />
          </button>

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
          <div className={toggleNav ? "activeSidenav px-4 py-3" : "sidenav px-4 py-3" }>
            <div className="container flex-row justify-content-between text-dark pl-2 pr-0">
              <button onClick={handleToggleNav} className="hamburger-btn" >
                <p className={toggleNav ? "activeHamburger" : "hamburber"} />
                <p className={toggleNav ? "activeHamburger-top" : "hamburber-top"} />
                <p className={toggleNav ? "activeHamburger-bottom" : "hamburber-bottom"} />
              </button>
              <Link href={"/"} className="navbar-brand m-0 text-center">
              <img src="../pictures/icons/Logo Igralishte final version 1.png" alt="logo"/>
              </Link>
              <button className="btn-search p-0" onClick={toggleSearchForm}>
                <img src="../pictures/icons/fluent_search-48-regular.png" alt="search icon" />
              </button>

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
            <ul className="flex-column justify-content-start text-left mx-3 my-5">
              <div className="mb-5">
                <li className="contact-text font-italic font-weight-bold text-left mb-3"><u>Ново</u></li>
                    <li className="dropdown dropdown1">
                      <p className="dropdown-toggle  menu-list w-100 mb-3" role="button" data-toggle="dropdown" aria-expanded="false">
                        Vintage Clothes
                      </p>
                      <div className={`dropdown-menu menu-list text-left {aria-expanded ? ".dropdown-menu.show " : "" }`}  onClick={handleToggleNav}>
                        <button className="border-0 bg-transparent"
                              onClick={() => {
                              router.push({
                              pathname: "/products",
                              });
                              }}>
                              <p className="dropdown-item pl-0 font-italic" style={{color: "#8A8328"}}><img src="../pictures/icons/sparks-elements.png" alt="stars" className="mr-1" /> Види ги сите</p>
                              </button>
                        <button  className="border-0 bg-transparent"
                              onClick={() => {
                              router.push({
                              pathname: "/products",
                              query: { subcategory: vintageClothes.map.subcategory, category: products.vintageClothes.tops[0].category }
                              });
                              }}>
                                <p className="dropdown-item pl-5 pr-0 ml-3" >Блузи</p>
                              </button >
                        <button  className="border-0 bg-transparent"
                              onClick={() => {
                              router.push({
                              pathname: "/products",
                              query: { brands: "women" },
                              });
                              }}>
                                <p className="dropdown-item pl-5 pr-0 ml-3" >Пантолони</p>
                              </button >
                        <button  className="border-0 bg-transparent"
                              onClick={() => {
                              router.push({
                              pathname: "/products",
                              query: { brands: "women" },
                              });
                              }}>
                                <p className="dropdown-item pl-5 pr-0 ml-3" >Здолништа / Шорцеви</p>
                              </button >
                        <button  className="border-0 bg-transparent"
                              onClick={() => {
                              router.push({
                              pathname: "/products",
                              query: { brands: "women" },
                              });
                              }}>
                                <p className="dropdown-item pl-5 pr-0 ml-3" >Фустани</p>
                              </button >
                        <button  className="border-0 bg-transparent"
                              onClick={() => {
                              router.push({
                              pathname: "/products",
                              query: { brands: "women" },
                              });
                              }}>
                                <p className="dropdown-item pl-5 pr-0 ml-3" >Палта и јакни</p>
                              </button >
                        <button  className="border-0 bg-transparent"
                              onClick={() => {
                              router.push({
                              pathname: "/products",
                              query: { brands: "women" },
                              });
                              }}>
                                <p className="dropdown-item pl-5 pr-0 ml-3" >Долна облека</p>
                              </button>
                      </div>
                    </li>
                    <li className="dropdown dropdown2 flex-row justify-content-between">
                      <p className="dropdown-toggle menu-list w-100 mb-3" role="button" data-toggle="dropdown" aria-expanded="false">
                        Брендови
                      </p>
                      <div className="dropdown-menu menu-list text-left">
                        <p className="dropdown-item pl-0 font-italic" style={{color: "#8A8328"}}><img src="../pictures/icons/sparks-elements.png" alt="stars" className="mr-2" /> Види ги сите</p>
                        <p className="dropdown-item pl-5 pr-0 ml-3" >Pinc Partywear</p>
                        <p className="dropdown-item pl-5 pr-0 ml-3" >Factory Girl</p>
                        <p className="dropdown-item pl-5 pr-0 ml-3" >Main Days</p>
                        <p className="dropdown-item pl-5 pr-0 ml-3" >Нежно</p>
                        <p className="dropdown-item pl-5 pr-0 ml-3" >Ред</p>
                        <p className="dropdown-item pl-5 pr-0 ml-3" >Наш</p>
                        <p className="dropdown-item pl-5 pr-0 ml-3" >Зш да не</p>
                        <p className="dropdown-item pl-5 pr-0 ml-3" >Fraeil</p>
                        <p className="dropdown-item pl-5 pr-0 ml-3" >Urma</p>
                        <p className="dropdown-item pl-5 pr-0 ml-3" >Candle Nest</p>
                        <p className="dropdown-item pl-5 pr-0 ml-3" >Beyond Green</p>
                        <p className="dropdown-item pl-5 pr-0 ml-3" >Gatta</p>
                      </div>
                    </li>
                    <li className="dropdown dropdown3 flex-row justify-content-between">
                      <p className="dropdown-toggle menu-list w-100 mb-3" role="button" data-toggle="dropdown" aria-expanded="false">
                        Accessories
                      </p>
                      <div className="dropdown-menu menu-list text-left">
                        <p className="dropdown-item pl-0 font-italic" style={{color: "#8A8328"}}><img src="../pictures/icons/sparks-elements.png" alt="stars" className="mr-2" /> Види ги сите</p>
                        <p className="dropdown-item pl-5 pr-0 ml-3" >Ташни</p>
                        <p className="dropdown-item pl-5 pr-0 ml-3" >Накит</p>
                      </div>
                    </li>
                    <li className="menu-list mb-3">Lifestyle</li>
                    <li className="menu-list mb-3">Подари картичка*</li>
                    <li className="menu-list font-italic text-danger mb-5">Попуст</li>
                  </div>

                  <div className="menu-footer my-5">
                    <li className="nav-item ">
                      <Link href={"/"} className="nav-link d-flex flex-row justify-content-start">
                        <button className="menu-footer-button"><img src="../pictures/icons/shopping cart.png" /> </button>
                        <p>Кошничка</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href={"/"} className="nav-link d-flex flex-row justify-content-start">
                        <button className="menu-footer-button"><img src="../pictures/icons/heart-straight-thin.png" /> </button>
                        <p>Омилени</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <div className="nav-link d-flex flex-row justify-content-start">
                        <button className="menu-footer-button"><img src="../pictures/icons/user-light.png" /></button>
                        {user ? (
                        <button onClick={handleLogOut} className="border-0 bg-transparent ml-2"><Link href={"/profile"}> Мој профил </Link></button>
                          ) : (
                            <Link href="/register">Регистрирај се / Логирај се</Link>
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
