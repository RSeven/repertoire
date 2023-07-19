export default function Search({ onChange }) {
    return (
        <div className="row">
            <div className="col">
                <input type="text" className="form-control" placeholder="Busca" onChange={ (ev) => onChange(ev.target.value) } />
            </div>
        </div>
    )
}