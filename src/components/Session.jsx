import { Link, useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Session({ day, movie }) {
  movie = { ...movie, data: day.date, weekday: day.weekday };
  return (
    <SessionContainer data-test="movie-day">
      {day.weekday} - {day.date}
      <ButtonsContainer>
        {day.showtimes.map(({ id, name }) => (
          <Button key={id} id={id} time={name} movie={{ ...movie, time: `${name}` }} />
        ))}
      </ButtonsContainer>
    </SessionContainer>
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

const SessionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Roboto';
  font-size: 20px;
  color: #293845;
  padding: 0 20px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0;
  button {
    margin-right: 20px;
  }
  a {
    text-decoration: none;
  }
`;
