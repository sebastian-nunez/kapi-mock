import { Link } from "react-router-dom"
import robotImg from "../assets/robot.png"
const NotFound: React.FC = () => {
  return (
    <div className="hero mt-10">
      <div className="hero-content flex-row">
        <section>
          <h1 className="text-7xl font-bold">404 - Not Found :/</h1>
          <p className="py-6 text-2xl text-slate-500">
            We're sorry, the page you're looking for doesn't exist.
          </p>

          <Link to="/">
            <button className="btn btn-primary mt-8 rounded-xl w-60">
              Home
            </button>
          </Link>
        </section>

        <img src={robotImg} className="max-w-sm hidden md:block " />
      </div>
    </div>
  )
}

export default NotFound
