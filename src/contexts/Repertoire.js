import { createContext, useState } from 'react';
import default_repertoires from 'repertoires.json';
import { Outlet } from 'react-router-dom';

export const RepertoireContext = createContext();

RepertoireContext.displayName = 'Repertoire';

export const RepertoireProvider = ({children}) => {
    const [repertoires, setRepertories] = useState(default_repertoires);
    return (
        <RepertoireContext.Provider value={{ repertoires, setRepertories }}>
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