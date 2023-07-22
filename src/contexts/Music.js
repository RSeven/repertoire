import { createContext, useEffect, useState } from 'react';
//import default_musics from 'musics.json';
import { Outlet } from 'react-router-dom';

export const MusicContext = createContext();

MusicContext.displayName = 'Music';

export const MusicProvider = ({children}) => {
    const [musics, setMusics] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function fetchData() {
            fetch(`http://localhost:8080/musics`)
                .then((response) => response.json())
                .then((data) => {
                    setMusics(data)
                    setLoading(false)
                })
                .catch((error) => console.log('error', error));
        }
        fetchData();
    }, []);

    return (
        <MusicContext.Provider value={{ musics, setMusics, loading }}>
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