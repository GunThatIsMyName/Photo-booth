import React, { useState } from "react";

// redux
import { useDispatch } from "react-redux";
import { Link, Outlet, useLocation } from "react-router-dom";
import { resetGifs, updateGifs } from "../redux/actions/GifsActions";
import { setSearchKeyword } from "../redux/actions/MainAction";
import { resetPhotos, updatePhotos } from "../redux/actions/PhotoActions";

// styles and utils
import { FormWrapper } from "../styles/Form.style";
import { MainBtnList, MainHero, Wrapper } from "../styles/Main.styles";
import { RoutesWrapper } from "../styles/Routes.styles";
import { searchList } from "../utils/helps";


const Main=()=> {
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
    if(keyword === search){
      return;
    }
    setSearch(keyword);
    resetDatas();
    dispatch(setSearchKeyword(keyword));
  }

  return (
    <Wrapper>
      {/* headers */}
      <h1 className="main__title">🧞‍♂️ Search Photos and gifs for fun!</h1>

      <FormWrapper onSubmit={handleSubmit} className="main__form">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="title"
          placeholder="검색어를 입력해 보세요"
          id="title"
        />
        <button className="button-30">Search 🔍 </button>
      </FormWrapper>


      <MainBtnList className="main__btn__box">
        {searchList.map((keyword) => {
          return <button className={`main__btn__item ${search===keyword.text ? "active" : null}`} onClick={handleSearchQuery} data-keyword={keyword.text} key={keyword.id}>{keyword.text}</button>;
        })}
      </MainBtnList>

      <RoutesWrapper>
        <Link  to="/">
          <button className={`nav__link ${pathname === "/"? "active":null}`} >Gifs 🦀 </button>
        </Link>
        <Link  to="/photo">
          <button className={`nav__link ${pathname === "/photo"? "active":null}`} >photo 🍕</button>
        </Link>
      </RoutesWrapper>

      {/* main */}
      <MainHero>
        <Outlet />
      </MainHero>

      <button className="main__btn__pagination" onClick={handlePagination}>
        더 보 기 👉🏼
      </button>
    </Wrapper>
  );
}

export default Main;
