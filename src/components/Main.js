import React from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet, useLocation } from "react-router-dom";
import { updateGifs } from "../redux/actions/GifsActions";
import { updatePhotos } from "../redux/actions/PhotoActions";

import { MainHero, Wrapper } from "../styles/Main.styles";

function Main() {
  const { pathname } = useLocation();
  
  const dispatch = useDispatch();
  const handlePagination = () => {
    if (pathname === "/") {
      dispatch(updateGifs());
    }else{
      dispatch(updatePhotos());
    }
  };

  return (
    <Wrapper>
      {/* headers */}
      <h1 className="main__title">GIFS 사진 모음</h1>

      <form className="main__form">
        <input type="text" name="title" id="title" />
        <button className="button-30">Search 🔍 </button>
      </form>

      <ul>
        <Link to="/">
          <button>Gifs</button>
        </Link>
        <Link to="/photo">
          <button>photo</button>
        </Link>
      </ul>

      {/* main */}
      <MainHero>
        <Outlet />
      </MainHero>

      <button className="main__btn__pagination" onClick={handlePagination}>
        More Gifs
      </button>
    </Wrapper>
  );
}

export default Main;
