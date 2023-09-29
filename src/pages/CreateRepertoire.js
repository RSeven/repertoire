import BSLink from "components/BSLink";
import RepertoireForm from "components/RepertoireForm";
import { RepertoireContext } from "contexts/Repertoire";
import { useContext, useState } from "react";

export default function CreateRepertoire() {
    const { repertoires, setRepertoires } = useContext(RepertoireContext);
    const [name, setName] = useState('')
    const [date, setDate] = useState('')

    function onSubmit(ev) {
        ev.preventDefault();

        fetch(`http://localhost:8080/setlists`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, date })
        }).then(() => {
            const id = repertoires.length ? repertoires[repertoires.length - 1].id + 1 : 1
            setRepertoires([...repertoires, {
                id,
                name,
                date
            }])

            setName('')
            setDate('')
        }).catch((error) => console.log(error))
    }

    return (
        <div className="container">
            <h1>New Repertoire</h1>

            <RepertoireForm
                onSubmit={onSubmit}
                name={name}
                setName={setName}
                date={date}
                setDate={setDate}
            />

            <div className="mt-2">
                <BSLink color='primary' to='/repertoires'>Voltar</BSLink>
            </div>
        </div>
    );
} 