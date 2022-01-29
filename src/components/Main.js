import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { MainHero, Wrapper } from "../styles/Main.styles";
import { API_ENDPOINT, API_KEY } from "../utils/Api";

function Main() {  
  
    // const getGifty=async()=>{
    //   const response = await fetch(`${API_ENDPOINT}/trending?api_key=${API_KEY}&limit=9&offset=${count}`);
    //   const {data} = await response.json();
    //   console.log(data);

    //   const getData = data.map(item=>{
    //     const {id,title,images}=item;
    //     const {original:{url:image}}=images;
    //     return {id,title,image};
    //   })
    //   setList(prev=>[...prev,...getData]);
    // }
    
    
  return (
    <Wrapper>

      {/* headers */}
      <h1 className="main__title" >Gifs 사진 들</h1>

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

    </Wrapper>
  );
}

export default Main;
