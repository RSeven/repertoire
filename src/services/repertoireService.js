import repertoires from 'repertoires.json';

export function fetch(id) {
    return repertoires.filter((repertoire) => repertoire.id === id)[0];
}