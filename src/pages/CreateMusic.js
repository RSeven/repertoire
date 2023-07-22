import BSLink from "components/BSLink";
import MusicForm from "components/MusicForm";
import { MusicContext } from "contexts/Music";
import { useContext } from "react";

export default function CreateMusic() {
    const { musics, setMusics } = useContext(MusicContext);

    const onCreateMusic = async (ev) => {
        ev.preventDefault();
        const name = ev.target.elements.name.value;
        const lyrics = ev.target.elements.lyrics.value;

        fetch(`http://localhost:8080/musics`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, lyrics })
        }).then(() => {
            setMusics([...musics, {
                id: musics[musics.length - 1].id + 1,
                name,
                lyrics
            }])
        }).catch((error) => console.log(error))
    }    

    return (
        <div className="container">
            <MusicForm onSubmit={onCreateMusic} />
            <div className="mt-2">
                <BSLink color='primary' to='/'>Voltar</BSLink>
            </div>
        </div>
    )
}