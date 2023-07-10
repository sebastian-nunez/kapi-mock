import heroImg from "../assets/hero.jpg"

const Hero: React.FC = () => {
  return (
    <div className="hero min-h-[calc(100vh_-_4rem)]">
      <div className="hero-content flex-row">
        <section>
          <h1 className="text-9xl font-bold tracking-tight">
            Creator
            <br className="md:hidden" />
            Verse
          </h1>

          <p className="py-5 text-xl pl-5 text-slate-500">
            <em>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              veniam.
            </em>
          </p>
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
