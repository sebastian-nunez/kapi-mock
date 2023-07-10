const Footer: React.FC = () => {
  return (
    <footer className="footer items-center p-5 bg-primary text-slate-200">
      <div className="items-center grid-flow-col">
        <p className="">
          Created by{" "}
          <a
            href="https://www.linkedin.com/in/sebastian-nunez-profile/"
            target="_blank"
            className="link link-hover text-white"
          >
            Sebastian Nunez
          </a>
        </p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end"></div>
    </footer>
  )
}

export default Footer
