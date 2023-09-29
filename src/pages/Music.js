import BSLink from "components/BSLink";
import BackButton from "components/BackButton";
import { MusicContext } from "contexts/Music";
import { useContext, useEffect, useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { useParams } from "react-router-dom"

export default function Music() {
    const params = useParams();
    const { ctxMusics, ctxLoadingMusics } = useContext(MusicContext);
    const [music, setMusic] = useState({});
    
    useEffect(() => {
        if(!ctxLoadingMusics) setMusic(ctxMusics.find((music) => music.id === parseInt(params.musicId)));
    }, [ctxMusics, ctxLoadingMusics, params.musicId]);
    
    return (
        <div className="container">
            <BackButton />
            <h2>{music.name} <BSLink color='secondary' to={`/music/update/${music.id}`}><Pencil /></BSLink></h2>
            <Tabs>
                <Tab eventKey="chords" title="Cifra" className="mt-3 ms-2">
                    { music.chords && <pre>{music.chords}</pre> }
                </Tab>
                <Tab eventKey="lyrics" title="Letra" className="mt-3 ms-2">
                    { music.lyrics && <pre>{music.lyrics}</pre> }
                </Tab>
            </Tabs>
            <BackButton />
        </div>
    )
}