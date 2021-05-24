import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  width: 272px;
  height: 472px;
  cursor: pointer;
  background: var(--card);
  border-radius: 5px;
  box-shadow: 0px 4px 122px rgba(246, 47, 162, 0.25);

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    margin: 20px 0;
  }

  ul li {
    margin: 2px;
    width: 30px;
    height: 30px;
    background-color: var(--gray);
    border-radius: 5px;
  }

  .r_wrap {
    position: absolute;
    margin: 20px;
    bottom: 0;
    right: 0;
  }

  .b_round, .s_round {
    position: absolute;
    right: 0px;
    bottom: 0px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--primary);
    transition: all 0.2s linear;
  }

  .b_round {
    opacity: 0;
    background-color: var(--primary);
  }

  .r_wrap:hover .b_round {
    transform: scale(1.37);
    opacity: 0.4;
  }

  .s_arrow {
    width: 32px;
    height: 32px;
    background-image: url('https://img-fotki.yandex.ru/get/194549/29644339.5/0_d6c60_1d7815f0_orig');
    background-color: transparent;
    transition: all 0.35s linear;
  }
`;
export const Avatar = styled.div`
  height: 122px;
  width: 122px;
  flex-shrink: 0;
  border: 4px solid var(--secondary);
  background-image: ${(props) => `url(${props.picture})`};
  background-position: center;
  background-size: cover;
  border-radius: 50%;
`;
export const Name = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin: 15px 0;
`;
export const Description = styled.div`
  font-size: 12px;
  color: var(--gray);
`;
export const Skill = styled.img`
`;
