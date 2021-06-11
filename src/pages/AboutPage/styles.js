import styled from "styled-components";

export const TopTab = styled.div`
  background: var(--quinary);
  width: 42px;
  height: 2px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 50px;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 30px 40px;
    border-right: 1px solid var(--quinary);

    @media (max-width: 768px) {
      border-right: none;
      border-bottom: 1px solid var(--quinary);
    }

    img {
      height: 120px;
      border: 3px solid var(--quinary);
      width: auto;
      margin: 20px 0;
      border-radius: 50%;
    }
  }

  div {
    margin: 30px;
  }

  h1 {
    font-size: 60px;
  }

  h2 {
    margin: 50px 0 20px 0;
  }

  strong {
    color: var(--quinary);
    font-weight: normal;
  }

  a {
    color: var(--quinary);
  }

  span {
    color: var(--gray);
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;

    @media (max-width: 768px) {
      flex-direction: column;

      li {
        margin: 50px 0;
      }
    }

    li {
      margin: 0 100px 0 0;
    }
  }

  p {
    font-size: 16px;
    margin: 5px 0;
    color: var(--gray);

    :nth-child(1) {
      color: gray;
      margin: 15px 0;
      cursor: pointer;
      transition: 0.2s;

      :hover {
        text-decoration: underline;
      }
    }
  }
`;
