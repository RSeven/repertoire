import BackButton from "components/BackButton";
import { MusicContext } from "contexts/Music";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function Music() {
    const params = useParams();
    const { musics, loading } = useContext(MusicContext);
    const [music, setMusic] = useState({});
    
    useEffect(() => {
        if(!loading) setMusic(musics.find((music) => music.id === parseInt(params.musicId)));
    }, [musics, loading, params.musicId]);
    
    return (
        <div className="container">
            <BackButton />
            <h1>{music.name}</h1>
            <pre>{music.chords}</pre>
            <BackButton />
        </div>
    )
}