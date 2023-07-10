import { Link } from "react-router-dom"
import { Share2 } from "lucide-react"

const NavBar = () => {
  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <span className="text-red-500">
            <Share2 />
          </span>
          CreatorVerse
        </Link>

        {/* <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/add">Add a Creator</Link>
          </li>
        </ul> */}
      </div>
    </nav>
  )
}

export default NavBar
