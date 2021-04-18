import styled from "styled-components"

const StyledHero = styled.div`
  height: 80vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  background: #000;

  padding: 0px 20px;

  .hero-text h1 {
    font-family: 'Roboto';
    font-size: 22px;
    font-weight: bold;
    color: #f2f2f2;

    max-width: 300px;
  }

  .hero-text a {
    background: #f9ca02;
    border-radius: 4px;

    width: 175px;
    height: 40px;
    padding: 10px 32px;

    color: #000;
    font-size: 16px;
    font-weight: bold;
  }

  @media only screen and (min-width: 1024px) {
    height: 100vh;
    padding: 0px 100px;

    display: flex;
    flex-direction: row;
    justify-content: unset;
    align-items: center;
    text-align: left;

    .hero-text h1 {
      font-size: 64px;
      max-width: 700px;
    }

    .hero-text a {
      font-size: 14px;
    }
  }
`

export default StyledHero
