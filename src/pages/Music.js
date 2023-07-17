import { useParams } from "react-router-dom"
import { fetch } from 'services/musicService'

export default function Music() {
    const params = useParams();
    const music = fetch(parseInt(params.musicId));
    
    return (
        <div className="container">
            <h1>{music.name}</h1>
            <pre>{music.lyrics}</pre>
        </div>
    )
}