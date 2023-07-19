import { MusicContext } from "contexts/Music";
import { useContext } from "react";
import { useParams } from "react-router-dom"

export default function Music() {
    const params = useParams();
    const { musics } = useContext(MusicContext);
    const music = musics.find((music) => music.id === parseInt(params.musicId));
    
    return (
        <div className="container">
            <h1>{music.name}</h1>
            <pre>{music.lyrics}</pre>
        </div>
    )
}