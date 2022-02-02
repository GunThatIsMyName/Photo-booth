import React from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";


import { MainHero, Wrapper } from "../styles/Main.styles";

function Main() {    
  const {pathname} = useLocation();

  const handlePagination = ()=>{
    if(pathname === "/"){
      console.log("Home");
    }
    if(pathname === "/photo"){
      console.log("photo")
    }
  }
  return (
    <Wrapper>

      {/* headers */}
      <h1 className="main__title" >GIFS 사진 모음</h1>

      <form className="main__form" >
        <input type="text" name="title" id="title" />
        <button className="button-30" >Search 🔍 </button>
      </form>

      <ul>
        <Link to="/" >
          <button>Gifs</button>
        </Link>
        <Link to="/photo" >
          <button>photo</button>
        </Link>
      </ul>

      {/* main */}
      <MainHero>
        <Outlet />
      </MainHero>

      <button onClick={handlePagination}>More Gifs</button>

    </Wrapper>
  );
}

export default Main;
