import styled from "styled-components";

export const FormWrapper = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 1rem;
  margin-bottom: 2rem;
  input {
    font-size: 1.4rem;
    padding: 0 10px;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    input{
        padding:10px;
    }
  }
`;
