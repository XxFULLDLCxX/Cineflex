import HomePage from '../pages/Home';
import SeatsPage from '../pages/Seats';
import SessionsPage from '../pages/Sessions';
import SuccessPage from '../pages/Success';
import { GlobalStyle, ResetStyle } from '../styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav';

export default function App() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sessoes/:idFilme" element={<SessionsPage />} />
          <Route path="/assentos/:idSessao" element={<SeatsPage />} />
          <Route path="/sucesso" element={<SuccessPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
