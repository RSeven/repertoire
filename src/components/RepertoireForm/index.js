import BSInput from "components/BSInput";

export default function RepertoireForm({ name, setName, date, setDate, onSubmit }) {
    return (
        <form onSubmit={(ev) => { ev.preventDefault(); onSubmit(ev); } }>
            <div className="m-1">
                <BSInput
                    fieldName="name"
                    label="Nome"
                    placeholder="Adicione um nome..."
                    value={name}
                    setValue={setName}
                />
            </div>
            <div className="m-1">
                <BSInput
                    fieldName="date"
                    label="Data"
                    placeholder="Adicione uma data..."
                    value={date}
                    setValue={setDate}
                />
            </div>
            <div className="mt-4">
                <button type="submit" className="btn btn-success">Confirmar</button>
            </div>
        </form>
    );
}