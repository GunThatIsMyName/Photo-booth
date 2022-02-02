import styled from "styled-components";

export const RoutesWrapper = styled.ul`
  .nav__link {
      cursor: pointer;
      margin-right:2rem;
      padding:10px 20px;
      font-size:1.5rem;
      background: #555555;
    color: #fff;
      border:none;
      border-radius:10px;
    &.active {
        background: #fff;
      color: #222;
    }
  }
`;
