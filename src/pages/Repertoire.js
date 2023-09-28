import BSLink from "components/BSLink";
import MusicList from "components/MusicList";
import { RepertoireContext } from "contexts/Repertoire";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function Repertoire() {
    const params = useParams()
    const { repertoires, loading } = useContext(RepertoireContext)
    const [musics, setMusics] = useState([]);
    const [repertoire, setRepertoire] = useState({}) 
    
    useEffect(() => {
        if(!loading) {
            setRepertoire(repertoires.find((repertoire) => repertoire.id === parseInt(params.repertoireId)))
        }
    }, [repertoires, loading, params.repertoireId])

    useEffect(() => {
        setMusics(repertoire.musics)
    }, [repertoire])

    return (
        <div className="container">
            <h1>{repertoire.name}</h1>
            <MusicList musics={musics} setMusics={setMusics} />
            <BSLink color='primary' to='/music/1'>Adicionar Música</BSLink>
        </div>
    )
}