import Header from 'components/Header';
import { useContext, useEffect, useState } from 'react';
import RepertoireCard from 'components/RepertoireCard';
import { RepertoireContext } from 'contexts/Repertoire';

export default function Repertoires() {
    const { repertoires, loading } = useContext(RepertoireContext)
    const [fetchedRepertoires, setFetchedRepertoires] = useState([])

    useEffect(() => {
        if(!loading) setFetchedRepertoires(repertoires);
    }, [loading, repertoires])

    return (
        <div className="container">
            <Header />
            {fetchedRepertoires.map((repertoire) => <RepertoireCard key={repertoire.id} repertoire={repertoire} />)}
        </div>
    );
}