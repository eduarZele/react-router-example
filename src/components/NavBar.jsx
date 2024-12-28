import {Link } from "react-router"

export default function NavBar() {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Landing Page</Link>
            </li>

            <li>
                <Link to="/home">Home Page</Link>
            </li>

            <li>
                <Link to="/dashboard">Dashboard Page</Link>
            </li>

            <li>
                <Link to="/analytics">Analytics Page</Link>
            </li>

            <li>
                <Link to="/admin">Admin Page</Link>
            </li>
        </ul>
    </nav>
  )
}
