import BSLink from "components/BSLink";
import MusicForm from "components/MusicForm";
import { MusicContext } from "contexts/Music";
import { useContext, useState } from "react";

export default function CreateMusic() {
    const { ctxMusics, ctxSetMusics } = useContext(MusicContext);
    const [name, setName] = useState('')
    const [lyrics, setLyrics] = useState('')
    const [chords, setChords] = useState('')

    const onCreateMusic = async (ev) => {
        ev.preventDefault();

        fetch(`http://localhost:8080/musics`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, lyrics, chords })
        }).then(() => {
            ctxSetMusics([...ctxMusics, {
                id: ctxMusics[ctxMusics.length - 1].id + 1,
                name,
                lyrics
            }])

            setName('')
            setLyrics('')
            setChords('')
        }).catch((error) => console.log(error))
    }

    return (
        <div className="container">
            <MusicForm
                onSubmit={onCreateMusic}
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