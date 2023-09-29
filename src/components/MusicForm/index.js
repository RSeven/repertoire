import BSInput from "components/BSInput";

export default function MusicForm({ onSubmit, name, setName, lyrics, setLyrics, chords, setChords }) {
    const fetchLyrics = (ev) => {
        ev.preventDefault();
        
        const [artist, music] = name.split(" - ")

        if(artist === undefined || music === undefined) return alert('Por favor digite o nome da música no formato correto')

        fetch(`http://api.vagalume.com.br/search.php?apikey=5337aa04bdf89e8f62dd0ee47128153a&art=${artist}&mus=${music}`)
            .then((res) => res.json())
            .then((data) => setLyrics(data.mus[0].text))
    }

    const fetchChords = (ev) => {
        ev.preventDefault();
        
        const [artist, music] = name.split(" - ")

        if(artist === undefined || music === undefined) return alert('Por favor digite o nome da música no formato correto')

        fetch(`http://localhost:8080/search_chords`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ artist, music })
        }).then((res) => res.json())
          .then((data) => setChords(data.content))
    }

    const onChangeLyrics = (ev) => {
        ev.target.style.height = `${ev.target.scrollHeight}px`;
        setLyrics(ev.target.value)
    }

    const onChangeChords = (ev) => {
        ev.target.style.height = `${ev.target.scrollHeight}px`;
        setChords(ev.target.value)
    }

    return (
        <>    
            <form onSubmit={(ev) => { ev.preventDefault(); onSubmit(ev); } }>
                <div className="m-1">
                    <BSInput
                        fieldName="name"
                        label="Nome"
                        placeholder="Artista - Música"
                        value={name}
                        setValue={setName}
                    />
                </div>
                <div className="m-1">
                    <label htmlFor="lyrics">Letra</label> <button className="btn btn-link p-0 align-top" onClick={(ev) => fetchLyrics(ev)}>auto-preencher</button>
                    <textarea name="lyrics" value={lyrics} onChange={(ev) => onChangeLyrics(ev)} placeholder="Adicione a letra..." className="form-control"></textarea>
                </div>
                <div className="m-1">
                    <label htmlFor="chords">Cifra</label> <button className="btn btn-link p-0 align-top" onClick={(ev) => fetchChords(ev)}>auto-preencher</button>
                    <textarea name="chords" value={chords} onChange={(ev) => onChangeChords(ev)} placeholder="Adicione a cifra..." className="form-control"></textarea>
                </div>
                <div className="mt-4">
                    <button type="submit" className="btn btn-success">Confirmar</button>
                </div>
            </form>
        </>
    )
}