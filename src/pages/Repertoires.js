import Header from 'components/Header';
import { useContext } from 'react';
import RepertoireCard from 'components/RepertoireCard';
import { RepertoireContext } from 'contexts/Repertoire';

export default function Repertoires() {
    const { repertoires } = useContext(RepertoireContext)

    return (
        <div className="container">
            <Header />
            {repertoires.map((repertoire) => <RepertoireCard key={repertoire.id} repertoire={repertoire} />)}
        </div>
    );
}