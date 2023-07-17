import { NavLink } from "react-router-dom";
import module from './Header.module.css';

export default function Header() {
    return (
        <ul class={`nav nav-pills ${module.nav}`}>
            <li class="nav-item">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `nav-link ${isActive ? "active" : ""}`
                    }
                >
                    Músicas
                </NavLink>
            </li>
            <li class={`nav-item ${module.navItem}`}>
                <NavLink
                    to="/repertoires"
                    className={({ isActive }) =>
                        `nav-link ${isActive ? "active" : ""}`
                    }
                >
                    Repertórios
                </NavLink>
            </li>
        </ul>
    )
}