import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Musics from 'pages/Musics';
import Music from 'pages/Music';
import Repertoires from 'pages/Repertoires';
import Repertoire from 'pages/Repertoire';
import CreateMusic from 'pages/CreateMusic';
import { MusicContextLayout } from 'contexts/Music';
import { RepertoireContextLayout } from 'contexts/Repertoire';
import UpdateMusic from 'pages/UpdateMusic';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MusicContextLayout />}>
          <Route index element={ <Musics /> } />
          <Route path='music/:musicId' element={ <Music /> } />
          <Route path='music/create' element={ <CreateMusic /> } />
          <Route path='music/update/:musicId' element={ <UpdateMusic /> } />
        </Route>
        <Route element={<RepertoireContextLayout />}>
          <Route path='repertoires' element={ <Repertoires /> } />
          <Route path='repertoire/:repertoireId' element={ <Repertoire /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
