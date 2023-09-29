import { Link } from "react-router-dom";
import module from './RepertoireCard.module.css';

export default function RepertoireCard({ repertoire }) {
    return (
        <div className={ module.card }>
            <Link to={`/repertoire/${repertoire.id}`}>{repertoire.name} ({repertoire.musics.length} músicas - {new Date(repertoire.musics.reduce((total, m) => (total = total + m.duration_s), 0) * 1000).toISOString().slice(11, 19)})</Link>
            <p>{repertoire.date}</p>
        </div>
    );
}