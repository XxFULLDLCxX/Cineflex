import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import arrow from '../assets/arrow.svg';

export default function Nav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <NavContainer>
      {location.pathname !== '/' && <button data-test="go-home-header-btn" onClick={() => navigate(-1)}></button>}
      <h1>CINEFLEX</h1>
    </NavContainer>
  );
}

function Button({ id, time, movie }) {
  const navigate = useNavigate();
  const press = () => {
    navigate(`/assentos/${id}`, { state: { movie } });
  };
  // <Link data-test="showtime" to={`/assentos/${id}`}>

  return (
    <button data-test="showtime" onClick={press}>
      {time}
    </button>
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
  font-family: 'Roboto', sans-serif;
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
