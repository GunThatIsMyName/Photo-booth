import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 1200px;
  margin: auto;
  width: 80%;
  margin-bottom: 10rem;

  .main__title {
    font-size: 2rem;
  }
  .main__btn__pagination {
    display: flex;
    margin: auto;
    padding: 10px 50px;
    font-weight: bold;
    font-size: 1.3rem;
    background: #555555;
    color: #fff;
    border-radius: 10px;
  }
`;

export const MainHero = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin: 0 auto;
  margin-bottom: 10rem;
  .photo__image {
    border-radius:10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 991px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const MainBtnList = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #555555;
  padding-bottom: 20px;
  .main__btn__item {
    cursor: pointer;
    background: #555555;
    color: #fff;
    font-size: 1rem;
    border: 1px solid #f2f2f2;
    border-radius: 10px;
    padding: 5px 10px;
    &.active {
      background: #fff;
      color: #222;
    }
  }

  @media screen and (max-width: 500px) {
    flex-wrap:wrap;
    justify-content: center;
  }
`;

export const ImageItem = styled.img`
  background: url("https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80");
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
  width: 100%;
  height: 100%;
`;
