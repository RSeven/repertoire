import { Link } from "react-router-dom";

export default function BSLink({ color, to, children }) {
    return (
        <>
            <Link className={`btn btn-${color}`} to={to}>
                {children}
            </Link>
        </>
    )
}