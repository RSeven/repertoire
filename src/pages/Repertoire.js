import { useParams } from "react-router-dom"
import { fetch } from "services/repertoireService";

export default function Repertoire() {
    const params = useParams();
    const repertoire = fetch(parseInt(params.repertoireId));
    
    return (
        <div className="container">
            <h1>{repertoire.name}</h1>
            
        </div>
    )
}