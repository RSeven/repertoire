export default function MusicForm({ onSubmit }) {
    return (
        <div className="container">    
            <form onSubmit={(ev) => { ev.preventDefault(); onSubmit(ev); } }>
                <div className="m-1">
                    <label for="name">Nome</label>
                    <input name="name" placeholder="Digite o nome..." type="text" className="form-control" />
                </div>
                <div className="m-1">
                    <label for="lyrics">Letra</label>
                    <textarea name="lyrics" placeholder="Adicione a letra..." className="form-control" rows="2" cols="25"></textarea>
                </div>
                <div className="mt-4">
                    <button type="submit" className="btn btn-primary">Adicionar Música</button>
                </div>
            </form>
        </div>
    )
}