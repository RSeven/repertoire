import { Link } from "react-router-dom";
import module from './RepertoireCard.module.css';

export default function RepertoireCard({ repertoire }) {
    return (
        <div className={ module.card }>
            <Link to={`/repertoire/${repertoire.id}`}>{repertoire.name}</Link>
            <p>{repertoire.date}</p>
        </div>
    );
}