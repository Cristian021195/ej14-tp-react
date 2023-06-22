import {Link, NavLink} from "react-router-dom";

export function Header(){
    return (
        <header>
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""  }>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/panel" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""  }>
                        Panel
                    </NavLink>
                </li>
            </ul>
        </header>
    )
}
/*
<li>
                    <NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""  }>
                        Login
                    </NavLink>
                </li>

*/