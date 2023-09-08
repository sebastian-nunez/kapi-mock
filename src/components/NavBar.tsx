import { Link } from "react-router-dom"
import { Share2 } from "lucide-react"

const NavBar = () => {
  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1 justify-content-around">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <span className="text-blue-500">
            <Share2 />
          </span>
          KPMG
        </Link>

        <ul className="menu menu-horizontal">
          <Link to="/file">
            <li className="btn bg-transparent border-none">KAPI</li>
          </Link>
        </ul>

        <div className="dropdown dropdown-hover ">
          <label tabIndex={0} className="btn m-1 bg-transparent border-none">
            Services
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="https://kpmg.com/xx/en/home/services/audit.html">
                Audit & Assurance
              </a>
            </li>

            <li>
              <a href="https://kpmg.com/xx/en/home/services/tax.html">
                Tax & Legal
              </a>
            </li>

            <li>
              <a href="https://kpmg.com/xx/en/home/services/advisory.html">
                Advisory
              </a>
            </li>

            <li>
              <a href="https://kpmg.com/xx/en/home/services/enterprise.html">
                Private Enterprise
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
