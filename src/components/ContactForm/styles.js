import styled from "styled-components";

export const Container = styled.div`
  form {
    width: 450px;

    @media (max-width: 500px) {
      width: 250px;
    }

    > input,
    textarea {
      background: transparent;
      padding: 16px;
      width: 100%;
      max-width: 100%;
      margin: 0 0 5px 0;
      border: 1px solid var(--quinary);
      color: white;
    }

    > button {
      padding: 15px;
      width: 185px;
      background: transparent;
      border: 1px solid var(--quinary);
      color: var(--quinary);
      height: 50px;

      -webkit-transition: 0.4s;
      -moz-transition: 0.4s;
      transition: 0.4s;
      letter-spacing: 1px;
      cursor: pointer;

      :hover {
        box-shadow: inset 185px 0 0 0 var(--quinary);
        color: white;
      }
    }

    #message {
      height: 250px;
    }
  }
`;
