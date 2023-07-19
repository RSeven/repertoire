import BSLink from "components/BSLink";
import MusicList from "components/MusicList";
import { RepertoireContext } from "contexts/Repertoire";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom"

export default function Repertoire() {
    const params = useParams()
    const { repertoires } = useContext(RepertoireContext)
    const repertoire = repertoires.find((repertoire) => repertoire.id === parseInt(params.repertoireId))
    const [musics, setMusics] = useState(repertoire.musics);
    
    return (
        <div className="container">
            <h1>{repertoire.name}</h1>
            <MusicList musics={musics} setMusics={setMusics} />
            <BSLink color='primary' to='/music/1'>Adicionar Música</BSLink>
        </div>
    )
}