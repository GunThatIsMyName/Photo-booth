import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet, useLocation } from "react-router-dom";
import { resetGifs, updateGifs } from "../redux/actions/GifsActions";
import { setSearchKeyword } from "../redux/actions/MainAction";
import { resetPhotos, updatePhotos } from "../redux/actions/PhotoActions";

import { MainHero, Wrapper } from "../styles/Main.styles";
import { searchList } from "../utils/helps";

function Main() {
  const [search, setSearch] = useState("");
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const handlePagination = () => {
    if (pathname === "/") {
      dispatch(updateGifs());
    } else {
      dispatch(updatePhotos());
    }
  };

  const resetDatas=()=>{
    dispatch(resetGifs());
    dispatch(resetPhotos());

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // reset photos data dispatch
    resetDatas();
    // set Search
    dispatch(setSearchKeyword(search));
    setSearch("");
  };

  const handleSearchQuery=(e)=>{
    const {keyword} = e.target.dataset;
    resetDatas();
    dispatch(setSearchKeyword(keyword));
  }

  return (
    <Wrapper>
      {/* headers */}
      <h1 className="main__title">GIFS 사진 모음</h1>

      <form onSubmit={handleSubmit} className="main__form">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="title"
          placeholder="검색어를 입력해 보세요"
          id="title"
        />
        <button className="button-30">Search 🔍 </button>
      </form>
      <div className="main__btn__box">
        {searchList.map((search) => {
          return <button onClick={handleSearchQuery} data-keyword={search.text} key={search.id}>{search.text}</button>;
        })}
      </div>

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
