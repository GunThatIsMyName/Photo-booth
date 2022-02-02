import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 1200px;
  margin: auto;
  width: 80%;
  margin-bottom:10rem;

  .main__title {
    font-size: 2rem;
  }

  .main__form {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 1rem;
    margin-bottom: 2rem;
    input {
      font-size: 1.4rem;
      padding: 0 10px;
    }
  }

  .main__btn__pagination{
    display:flex;
    margin:auto;
  }

  `;

export const MainHero = styled.main`
  background: #fff;
  display:grid;
  grid-template-columns:repeat(4,1fr);
  grid-gap:10px;
  margin: 0 auto;
  margin-bottom:10rem;
  .photo__image {
      width: 100%;
      height:100%;
      object-fit: cover;
    }
    
    @media screen and (max-width:991px){
      grid-template-columns:repeat(3,1fr);
  }
    @media screen and (max-width:640px){
      grid-template-columns:repeat(2,1fr);
  }

`;