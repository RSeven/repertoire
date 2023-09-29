import MusicList from "components/MusicList";
import Search from "components/Search";
import { MusicContext } from "contexts/Music";
import { RepertoireContext } from "contexts/Repertoire";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function Repertoire() {
    const params = useParams()
    const { ctxRepertoires, ctxLoadingRepertoires } = useContext(RepertoireContext)
    const { ctxMusics, ctxLoadingMusics } = useContext(MusicContext)
    const [musics, setMusics] = useState([]);
    const [repertoire, setRepertoire] = useState({})
    const [filteredMusics, setFilteredMusics] = useState([]);
    
    useEffect(() => {
        if(!ctxLoadingRepertoires) {
            setRepertoire(ctxRepertoires.find((repertoire) => repertoire.id === parseInt(params.repertoireId)))
        }
    }, [ctxRepertoires, ctxLoadingRepertoires, params.repertoireId])

    useEffect(() => {
        setMusics(repertoire.musics)
    }, [repertoire])

    useEffect(() => {
        if(!ctxLoadingMusics) {
            setFilteredMusics(ctxMusics.filter((ctxMusic) => !musics?.find((m) => m.id === ctxMusic.id)));
        }
    }, [ctxLoadingMusics, ctxMusics, musics])

    function onSearchChange(value) {
        const normalizedValue = value.toLowerCase();
        const matches = ctxMusics.filter((music) => music.name.toLowerCase().includes(normalizedValue));

        setFilteredMusics(matches)
    }

    function addToRepertoire(music) {
        repertoire.musics = [...repertoire.musics, music]
        persistChange(repertoire)
    }

    function removeFromRepertoire(music) {
        repertoire.musics = repertoire.musics.filter((m) => m.id !== music.id)
        persistChange(repertoire)
    }

    function onOrderChange(musics) {
        repertoire.musics = musics
        persistChange(repertoire)
    }
    
    function persistChange(repertoire) {
        setRepertoire(repertoire)
        setMusics(repertoire.musics)

        fetch(`http://localhost:8080/setlists/${repertoire.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                setlist: {
                    name: repertoire.name,
                    date: repertoire.date,
                    music_ids: repertoire.musics.map((m) => m.id)
                }
            })
        }).catch((error) => console.log(error))
    }

    return (
        <div className="container">
            <h1>{repertoire.name} ({musics?.length} músicas - {musics && new Date(musics.reduce((total, m) => (total = total + m.duration_s), 0) * 1000).toISOString().slice(11, 19)})</h1>
            <MusicList musics={musics} setMusics={setMusics} onRemove={removeFromRepertoire} onOrderChange={onOrderChange} />
            <hr/>
            <h2>Adicionar músicas</h2>
            <div className='row mb-2'>
                <div className='col-auto'>
                    <Search onChange={onSearchChange} />
                </div>
            </div>
            <h3>{filteredMusics.length} músicas</h3>
            <MusicList musics={filteredMusics} setMusics={setFilteredMusics} onAdd={addToRepertoire} />
        </div>
    )
}