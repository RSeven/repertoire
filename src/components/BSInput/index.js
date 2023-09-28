export default function BSInput({ fieldName, label, placeholder, value, setValue }) {
    return (
        <>
            <label htmlFor={fieldName}>{label}</label>
            <input name={fieldName} value={value} placeholder={placeholder} onChange={(ev) => setValue(ev.target.value)} type="text" className="form-control" />
        </>
    )
}