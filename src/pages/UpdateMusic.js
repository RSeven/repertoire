import BSLink from "components/BSLink";
import MusicForm from "components/MusicForm";
import { MusicContext } from "contexts/Music";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UpdateMusic() {
    const params = useParams()
    const { musics, setMusics, loading } = useContext(MusicContext);
    const [music, setMusic] = useState({})
    const [name, setName] = useState('')
    const [lyrics, setLyrics] = useState('')
    const [chords, setChords] = useState('')


    useEffect(() => {
        if(!loading) {
            setMusic(musics.find((music) => music.id === parseInt(params.musicId)));
        }
    }, [musics, loading, params.musicId]);

    useEffect(() => {
        setName(music.name)
        setLyrics(music.lyrics)
        setChords(music.chords)
    }, [music])

    const onUpdateMusic = async (ev) => {
        ev.preventDefault();

        fetch(`http://localhost:8080/musics/${params.musicId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, lyrics, chords })
        }).then(() => {
            setMusics(musics.map((music) => music.id === params.musicId ? { name, lyrics, chords } : music))

            setName('')
            setLyrics('')
            setChords('')
        }).catch((error) => console.log(error))
    }

    return (!loading &&
        <div className="container">
            <MusicForm
                onSubmit={onUpdateMusic}
                name={name}
                setName={setName}
                lyrics={lyrics}
                setLyrics={setLyrics}
                chords={chords}
                setChords={setChords}
            />
            <div className="mt-2">
                <BSLink color='primary' to='/'>Voltar</BSLink>
            </div>
        </div>
    )
}