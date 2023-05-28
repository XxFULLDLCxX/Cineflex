import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const SELECTED = { bg: '#1AAE9E', bd: '#0E7D71', id: 2 };
const AVAILABLE = { bg: '#C3CFD9', bd: '#808F9D', id: 1 };
const UNAVAILABLE = { bg: '#FBE192', bd: '#F7C52B', id: 0 };

const setState = (isAvailable) => (isAvailable ? AVAILABLE : UNAVAILABLE);

export default function Seats({ seats, info, setInfo }) {
  return (
    <>
      <SeatsContainer>
        {seats.map(({ id, name, isAvailable }) => (
          <Seat key={id} id={id} name={name} initial={setState(isAvailable)} info={info} setInfo={setInfo} />
        ))}
      </SeatsContainer>
      <CaptionContainer>
        <CaptionItem>
          <CaptionCircle color={SELECTED}></CaptionCircle>
          Selecionado
        </CaptionItem>
        <CaptionItem>
          <CaptionCircle color={AVAILABLE}></CaptionCircle>
          Disponível
        </CaptionItem>
        <CaptionItem>
          <CaptionCircle color={UNAVAILABLE}></CaptionCircle>
          Indisponível
        </CaptionItem>
      </CaptionContainer>
    </>
  );
}

function Seat({ id, name, initial, info, setInfo }) {
  const [state, setState] = useState(initial);

  const press = () => {
    if (state.id === 0) return alert('Esse assento não está disponível');
    setState(state.id === 2 ? initial : SELECTED);
    setInfo({ ...info, ids: info.ids.includes(id) ? info.ids.filter((n) => n != id) : [...info.ids, id] });
  };

  return (
    <SeatItem data-test="seat" color={state} onClick={press}>
      {String(name).padStart(2, 0)}
    </SeatItem>
  );
}

const SeatsContainer = styled.div`
  width: 330px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  user-select: none;
`;
const CaptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  justify-content: space-between;
  margin: 20px;
`;
const CaptionCircle = styled.div`
  border: 1px solid ${({ color }) => color.bd};
  background-color: ${({ color }) => color.bg};
  height: 25px;
  width: 25px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
`;
const CaptionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
`;
const SeatItem = styled.div`
  border: 1px solid ${({ color }) => color.bd};
  background-color: ${({ color }) => color.bg};
  height: 25px;
  width: 25px;
  border-radius: 25px;
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
`;
