import {Link} from "react-router-dom"

export const MainNav = () => (
    <div className="mb-5 bg-purple-400">
        <ul className="flex">
            <li className="ml-4">
                <Link to="/">Home</Link>
            </li>
            <li className="ml-4">
                <Link to="/search">Search for ASIC IP</Link>
            </li>
            <li className="ml-4">
                <Link to="/asicip">All ASIC IPs</Link>
            </li>
        </ul>
    </div>
)
