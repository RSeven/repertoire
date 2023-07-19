import { createContext, useState } from 'react';
import default_musics from 'musics.json';
import { Outlet } from 'react-router-dom';

export const MusicContext = createContext();

MusicContext.displayName = 'Music';

export const MusicProvider = ({children}) => {
    const [musics, setMusics] = useState(default_musics);
    return (
        <MusicContext.Provider value={{ musics, setMusics }}>
            {children}
        </MusicContext.Provider>
    )
}

export const MusicContextLayout = () => {
    return (
        <MusicProvider>
            <Outlet />
        </MusicProvider>
    );
};