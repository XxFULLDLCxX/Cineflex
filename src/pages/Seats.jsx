import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Seats from '../components/Seats';
import { formatCPF } from '../core';

export default function SeatsPage() {
  const { idSessao } = useParams();
  const [seats, setSeats] = useState([]);
  const [info, setInfo] = useState({ ids: [], name: '', cpf: '' });
  const { movie } = useLocation().state;
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
      .then(response => {
        setSeats(response.data.seats);
      })
      .catch(error => alert(error.response.data)); // prettier-ignore
  }, []);

  const bookSeat = (e) => {
    e.preventDefault();
    if (info.ids.length !== 3) {
      axios.post('https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many', info)      
        .then(response => {
          setSeats(response.data.seats);
          navigate(`/sucesso`, { state: { movie, info } });
        })
        .catch(error => alert(error.response.data.message ? error.response.data.message: error.message)); // prettier-ignore
    } else alert('Não selecionou nenhum assento');
  };

  return (
    <PageContainer>
      Selecione o(s) assento(s)
      <Seats seats={seats} info={info} setInfo={setInfo} />
      <FormContainer onSubmit={bookSeat}>
        Nome do Comprador:
        <input
          data-test="client-name"
          placeholder="Digite seu nome..."
          value={info.name}
          onChange={({ target: { value } }) => setInfo({ ...info, name: value })}
          name="username"
          required
        />
        CPF do Comprador:
        <input
          data-test="client-cpf"
          placeholder="Digite seu CPF..."
          value={formatCPF(info.cpf)}
          onChange={({ target: { value } }) => setInfo({ ...info, cpf: value.replace(/\D/g, '') })}
          maxLength="14"
          pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
          name="CPF"
          required
        />
        <button data-test="book-seat-btn" type="submit">
          Reservar Assento(s)
        </button>
      </FormContainer>
      <FooterContainer data-test="footer">
        <div>
          <img src={movie.posterURL} alt="poster" />
        </div>
        <div>
          <p>{movie.title}</p>
          <p>{`${movie.weekday} - ${movie.time}`}</p>
        </div>
      </FooterContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto';
  font-size: 24px;
  text-align: center;
  color: #293845;
  margin-top: 30px;
  padding-bottom: 120px;
  padding-top: 70px;
`;
const FormContainer = styled.form`
  width: calc(100vw - 40px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;
  font-size: 18px;
  button {
    align-self: center;
  }
  input {
    width: calc(100vw - 60px);
  }
  input:invalid {
    background-color: #feeddc;
  }
`;
const FooterContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: #c3cfd9;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  position: fixed;
  bottom: 0;

  div:nth-child(1) {
    box-shadow: 0px 2px 4px 2px #0000001a;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin: 12px;
    img {
      width: 50px;
      height: 70px;
      padding: 8px;
    }
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p {
      text-align: left;
      &:nth-child(2) {
        margin-top: 10px;
      }
    }
  }
`;
