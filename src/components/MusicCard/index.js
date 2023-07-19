import { Link } from "react-router-dom";
import { Draggable, useDraggable } from "react-tiny-dnd";
import module from './MusicCard.module.css'
import BSLink from "components/BSLink";
import { CardList } from "react-bootstrap-icons";

export default function MusicCard({ context, music, index }) {
    const {
        listeners, // Handler listeners can be passed to Draggable component as well
        isDragging,
    } = useDraggable(context, index);

    return (
        <Draggable context={context} key={music.id} index={index}>
            <div className={module.item} {...listeners} style={{ backgroundColor: '#eee', opacity: isDragging ? 0.5 : 1 }}>
                <Link to={`/music/${music.id}`}>{music.name}</Link>
                <div className="mt-2">
                    <BSLink className='ml-auto' color='primary' to='/music/1'><CardList /></BSLink>
                </div>
            </div>
        </Draggable>
    );
}