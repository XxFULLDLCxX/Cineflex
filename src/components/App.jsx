import styled from "styled-components";
import HomePage from "../pages/Home";
import SeatsPage from "../pages/Seats";
import SessionsPage from "../pages/Sessions";
import SuccessPage from "../pages/Success";
import { GlobalStyle, ResetStyle } from "../styles";
import arrow from "../assets/arrow.svg";

export default function App() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <NavContainer>
        <button data-test="go-home-header-btn"></button>
        <h1>CINEFLEX</h1>
      </NavContainer>

      <HomePage />
      {/* <SeatsPage /> */}
      {/* <SessionsPage /> */}
      {/* <SuccessPage /> */}
    </>
  );
}

const NavContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c3cfd9;
  color: #e8833a;
  font-family: "Roboto", sans-serif;
  font-size: 34px;
  position: fixed;
  top: 0;
  a {
    text-decoration: none;
    color: #e8833a;
  }
  button {
    background-color: #c3cfd9;
    background-image: url(${arrow});
    background-size: cover;
    box-sizing: border-box;

    width: 42px;
    position: absolute;
    top: 5px;
    left: 15px;
    bottom: 5px;
    margin: auto;
  }
`;
