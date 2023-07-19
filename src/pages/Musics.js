import BSLink from 'components/BSLink';
import Header from 'components/Header';
import MusicList from 'components/MusicList';
import Search from 'components/Search';
import { MusicContext } from 'contexts/Music';
import { useContext, useState } from 'react';

export default function Musics() {
    const { musics } = useContext(MusicContext);
    const [filteredMusics, setFilteredMusics] = useState(musics);

    const onChange = (value) => {
        const normalizedValue = value.toLowerCase();
        const matches = musics.filter((music) => music.name.toLowerCase().includes(normalizedValue));

        setFilteredMusics(matches);
    }

    return (
        <div className="container">
            <Header />
            <div className='row mb-2'>
                <div className='col-auto'>
                    <Search onChange={onChange} />
                </div>
                <div className='col-auto'>
                    <BSLink color='primary' to='/music/create'>Nova música</BSLink>
                </div>
            </div>
            <MusicList musics={filteredMusics} setMusics={setFilteredMusics} />
        </div>
    );
}