import Header from 'components/Header';
import default_repertoires from "repertoires.json";
import { useState } from 'react';
import RepertoireCard from 'components/RepertoireCard';

export default function Repertoires() {
    const [repertoires, setRepertoires] = useState(default_repertoires)

    return (
        <div className="container">
            <Header />
            {repertoires.map((repertoire) => <RepertoireCard key={repertoire.id} repertoire={repertoire} />)}
        </div>
    );
}