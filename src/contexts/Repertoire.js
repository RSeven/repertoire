import { createContext, useEffect, useState } from 'react';
import default_repertoires from 'repertoires.json';
import { Outlet } from 'react-router-dom';

export const RepertoireContext = createContext();

RepertoireContext.displayName = 'Repertoire';

export const RepertoireProvider = ({children}) => {
    const [repertoires, setRepertories] = useState(default_repertoires);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            fetch(`http://localhost:8080/setlists`)
            .then((response) => response.json())
            .then((data) => {
                setRepertories(data);
                setLoading(false);
            })
            .catch((error) => console.log('error fetching repertoires', error))
        }

        fetchData()
    }, [])

    return (
        <RepertoireContext.Provider value={{ repertoires, setRepertories, loading }}>
            {children}
        </RepertoireContext.Provider>
    )
}

export const RepertoireContextLayout = () => {
    return (
        <RepertoireProvider>
            <Outlet />
        </RepertoireProvider>
    );
};