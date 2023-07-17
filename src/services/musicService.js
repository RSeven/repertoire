import musics from 'musics.json';

export function fetch(id) {
    return musics.filter((music) => music.id === id)[0];
}