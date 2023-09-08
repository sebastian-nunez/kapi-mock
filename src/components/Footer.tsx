const Footer: React.FC = () => {
  return (
    <footer className="footer px-5 md:px-10 py-10 bg-blue-500 text-white">
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Audit & Assurance</a>
        <a className="link link-hover">Tax Advisory</a>
        <a className="link link-hover">Advisory Services</a>
        <a className="link link-hover">Financial Advisory</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <form>
        <header className="footer-title">Newsletter</header>
        <fieldset className="form-control w-80">
          <div className="relative">
            <input
              type="text"
              placeholder="johndoe@gmail.com"
              className="input input-bordered w-full pr-16 text-black"
            />
            <button className="btn absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
  )
}

export default Footer
