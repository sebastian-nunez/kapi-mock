import { Link } from "react-router-dom"

const Services: React.FC = () => {
  return (
    <>
      <section className="px-5 lg:px-8 mt-10">
        <h1 className="font-bold text-3xl tracking-tight md:text-4xl text-slate-800">
          Services
        </h1>

        <hr className="mt-2 bg-slate-400 mb-6" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="https://kpmg.com/xx/en/home/services/audit.html"
            className="card card-compact w-auto bg-base-100 shadow-xl cursor-pointer hover:bg-slate-50 text-center py-2"
          >
            <figure className="max-h-40 sm:max-h-full">
              <img
                src="/src/assets/audit.jpg"
                alt="Audit and Assurance"
                className="object-cover object-top"
              />
            </figure>

            <div className="card-body">
              <h2 className="font-semibold text-xl">Audit & Assurance</h2>
              <p className="text-sm text-slate-600">
                We are committed to serving the public interest by providing
                objective assurance over data on which investors rely.
              </p>
            </div>
          </Link>

          <Link
            to="https://kpmg.com/xx/en/home/services/tax.html"
            className="card card-compact w-auto bg-base-100 shadow-xl cursor-pointer hover:bg-slate-50 text-center py-2"
          >
            <figure className="max-h-40 sm:max-h-full">
              <img
                src="/src/assets/tax.jpg"
                alt="Tax & Legal"
                className="object-cover object-top"
              />
            </figure>

            <div className="card-body">
              <h2 className="font-semibold text-xl">Tax & Legal</h2>
              <p className="text-sm text-slate-600">
                You face steep compliance demands and complex changes; we help
                you transform your function to make a greater impact.
              </p>
            </div>
          </Link>

          <Link
            to="https://kpmg.com/xx/en/home/services/advisory.html"
            className="card card-compact w-auto bg-base-100 shadow-xl cursor-pointer hover:bg-slate-50 text-center py-2"
          >
            <figure className="max-h-40 sm:max-h-full">
              <img
                src="/src/assets/advisory.jpg"
                alt="Advisory"
                className="object-cover object-top"
              />
            </figure>

            <div className="card-body">
              <h2 className="font-semibold text-xl">Advisory</h2>
              <p className="text-sm text-slate-600">
                Together, we help you create lasting value and responsible
                growth to make your business fit for tomorrow.
              </p>
            </div>
          </Link>

          <Link
            to="https://kpmg.com/xx/en/home/services/enterprise.html"
            className="card card-compact w-auto bg-base-100 shadow-xl cursor-pointer hover:bg-slate-50 text-center py-2"
          >
            <figure className="max-h-40 sm:max-h-full">
              <img
                src="/src/assets/enterprise.jpg"
                alt="Private Enterprise"
                className="object-cover object-top"
              />
            </figure>

            <div className="card-body">
              <h2 className="font-semibold text-xl">Private Enterprise</h2>
              <p className="text-sm text-slate-600">
                Helping entrepreneurs build great businesses. We know what it
                takes to be successful at each stage of your business.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Services
