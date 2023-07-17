import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Musics from 'pages/Musics';
import Music from 'pages/Music';
import Repertoires from 'pages/Repertoires';
import Repertoire from 'pages/Repertoire';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <Musics /> } />
        <Route path='music/:musicId' element={ <Music /> } />
        <Route path='repertoires' element={ <Repertoires /> } />
        <Route path='repertoire/:repertoireId' element={ <Repertoire /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
