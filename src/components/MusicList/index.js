import MusicCard from 'components/MusicCard';
import { moveItems, useDraggableContext } from 'react-tiny-dnd';

export default function MusicList({ musics, setMusics, onAdd, onRemove, onOrderChange }) {
    const onDrop = (dragIndex, overIndex) => {
        const nextItems = moveItems(musics, dragIndex, overIndex);
        setMusics(nextItems);
        onOrderChange && onOrderChange(nextItems);
    };
    
    const context = useDraggableContext({
        onDrop,
    });

    return (musics &&
        <>
            {musics.map((music, idx) => <MusicCard context={context} key={music.id} music={music} index={idx} onAdd={onAdd} onRemove={onRemove} />)}
        </>
    )
}