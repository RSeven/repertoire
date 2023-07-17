import Header from 'components/Header';
import MusicCard from 'components/MusicCard';
import default_musics from "musics.json";
import { useState } from 'react';
import { moveItems, useDraggableContext } from 'react-tiny-dnd';

export default function Musics() {
    const [musics, setMusics] = useState(default_musics)

    const onDrop = (dragIndex, overIndex) => {
        const nextItems = moveItems(musics, dragIndex, overIndex);
        setMusics(nextItems);
    };
    
    const context = useDraggableContext({
        onDrop,
    });

    return (
        <div className="container">
            <Header />
            {musics.map((music, idx) => <MusicCard context={context} key={music.id} music={music} index={idx} />)}
        </div>
    );
}