import Header from 'components/Header';
import { useContext, useEffect, useState } from 'react';
import RepertoireCard from 'components/RepertoireCard';
import { RepertoireContext } from 'contexts/Repertoire';
import BSLink from 'components/BSLink';

export default function Repertoires() {
    const { ctxRepertoires, ctxLoadingRepertoires } = useContext(RepertoireContext)
    const [fetchedRepertoires, setFetchedRepertoires] = useState([])

    useEffect(() => {
        if(!ctxLoadingRepertoires) setFetchedRepertoires(ctxRepertoires);
    }, [ctxLoadingRepertoires, ctxRepertoires])

    return (
        <div className="container">
            <Header />
            <div className='row mb-2'>
                <div className='col-auto'>
                    <BSLink color='primary' to='/repertoire/create'>Novo Repertório</BSLink>
                </div>
            </div>
            {fetchedRepertoires.map((repertoire) => <RepertoireCard key={repertoire.id} repertoire={repertoire} />)}
        </div>
    );
}