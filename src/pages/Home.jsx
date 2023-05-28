import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Movie from '../components/Movie';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies')
      .then(response => setMovies(response.data))
      .catch(error => alert(error.response.data)); // prettier-ignore
  }, []);
  return (
    <PageContainer>
      Selecione o filme
      <ListContainer>
        {movies.map((m) => (
          <Movie key={m.id} id={m.id} posterURL={m.posterURL} />
        ))}
      </ListContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  text-align: center;
  color: #293845;
  margin-top: 30px;
  padding-top: 70px;
`;
const ListContainer = styled.div`
  width: 330px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 10px;
`;

const MovieContainer = styled.div`
  width: 145px;
  height: 210px;
  box-shadow: 0px 2px 4px 2px #0000001a;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  img {
    width: 130px;
    height: 190px;
  }
`;
