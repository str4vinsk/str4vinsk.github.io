import styled from "styled-components";
import {AiFillGithub} from 'react-icons/ai'

export const GitHubIcon = styled(AiFillGithub)`
    color: black;
    align-self: flex-end;
    width: 25px;
    height: 25px;
    margin: 0 15px;
    z-index: 2;
    cursor: pointer;
`

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0 15px;
  word-wrap: break-word;
  min-width: 250px;
  max-width: 250px;
  height: 300px;
  margin: 32px 32px 0 0;
  background: linear-gradient(180deg, #b1e5f9, #f4d2fe);
  background-position: center;
  background-size: cover;

  h1 {
    font-size: 20pt;
    white-space: nowrap;
    word-break: break-all;
    word-wrap: break-word;
    color: black;
    font-weight: 800;
  }

  p {
      font-size: 8pt;
      word-spacing: 20px;
      font-weight: bold;
      color: black;
  }

  @media (max-width: 650px) {
    margin: 26px 0;
  }

  &:hover {
    border: 1px solid var(--primary);
    background: transparent;

    :after {
      display: block;
    }

    > h1 {
      color: white;
    }

    > p {
        color: white;
    }

    > svg {
        color: white;
    }
  }

  ::after {
    content: "";
    position: absolute;
    display: none;
    width: 100%;
    height: 100%;
    border: 1px solid var(--primary);
    right: 10px;
    top: 10px;
    z-index: 1;
  }
  /* 
  ::before {
    content: "";
    display: none;
    height: 100%;
    width: 100%;
    position: absolute;
    border-radius: 5px;
    top: 0;
    left: 0;
    transition: 0.2s;
    background-color: rgba(24, 24, 24, 0.75);
  } */

  a {
    font-size: 12px;
    font-weight: bold;
    word-break: break-word;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    text-decoration: none;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    opacity: 0;
    background-color: var(--primary);
    cursor: pointer;
    transition: 0.25s;
  }

  :hover a {
    opacity: 100;
  }
`;
