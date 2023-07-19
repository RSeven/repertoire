import BSLink from "components/BSLink";
import MusicForm from "components/MusicForm";
import { MusicContext } from "contexts/Music";
import { useContext } from "react";

export default function CreateMusic() {
    const { musics, setMusics } = useContext(MusicContext);

    const onCreateMusic = (ev) => {
        ev.preventDefault();
        setMusics([...musics, {
            id: musics[musics.length - 1].id + 1,
            name: ev.target.elements.name.value,
            lyrics: ev.target.elements.lyrics.value
        }])
    }    

    return (
        <div className="container">
            <MusicForm onSubmit={onCreateMusic} />
            <BSLink color='primary' to='/'>Voltar</BSLink>
        </div>
    )
}