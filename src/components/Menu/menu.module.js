import styled, { css } from "styled-components";

export const Container = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #FFE071;

  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);

  transition: .5s;

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: .7s;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: scale(0.7);
    transition: .7s;
  }

  .linkmenu{
    font-family:"Abel";
    text-decoration:none;
    color:#1162AD;
    font-size:45px;
    letter-spacing: 5px;
    padding-bottom: 3rem
  }

  @media  screen and (min-width: 768px) {

    .linkmenu{
      padding: 0.8rem 1rem;
      transition: all .4s;
      border-radius: 3rem;
    }

    .linkmenu:hover{
      color:#FFE071;
      background-color: #1162AD;
      
    }

  }

  ${({ isVisible }) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);

    .fechar{
      color:#1162AD;
    }

    > svg {
      transform: rotate(0deg);
    }

    nav {
      transform: scale(1);
    }
  `}
`;