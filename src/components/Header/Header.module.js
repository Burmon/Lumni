import styled from "styled-components";

export const Container = styled.header`
  width: 97,5%;
  background: #1162AD; 
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > section {
    display: flex;
    gap: 2rem;

    &:last-child {
      gap: 1rem;
    }

    

      @media(max-width: 500px) {
        width: 50px;
      }
    }

    > nav {
      display: flex;
      gap: 1rem;

      nav a {
        font-family:"Abel";
        font-size: 20px;
        position: relative;
        color: #FFE071;
       



      
      }
    }
    .mobile {
     
      color: #FFE071;
      cursor: pointer;
    }

    @media(max-width: 900px) {
      .mobile {
        display: initial;
      }
      > nav {
        display: none;
      }
    }
  }

  @media(max-width: 700px) {
    padding: 14.5px 16px;
  }
`;