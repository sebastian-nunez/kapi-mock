import heroImg from "../assets/hero.jpg"
import { Link } from "react-router-dom"

const Hero: React.FC = () => {
  return (
    <div className="hero min-h-[calc(100vh_+_5rem)] mt-[-15rem] md:mt-[-9rem]">
      <div className="hero-content flex-row">
        <section>
          <h1 className="text-6xl font-bold tracking-tight md:text-8xl">
            Introducing
            <br />
            <span className="text-blue-500"> KAPI</span>
          </h1>

          <p className="py-5 text-lg text-slate-500 md:text-2xl">
            <em>Your trusted AI-Powered service advisor.</em>
          </p>

          <Link to="/file">
            <button className="btn bg-blue-500 btn-block sm:btn-wide text-white rounded-lg hover:bg-blue-600 mt-6 drop-shadow-sm">
              Try it out for FREE!
            </button>
          </Link>
        </section>

        <img
          src={heroImg}
          className="lg:max-w-md hidden lg:block"
          alt="Robot Cartoon"
        />
      </div>
    </div>
  )
}

export default Hero
