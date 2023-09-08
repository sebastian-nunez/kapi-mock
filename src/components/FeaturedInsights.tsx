import { Link } from "react-router-dom"

const FeaturedInsights: React.FC = () => {
  return (
    <section className="px-5 lg:px-8">
      <h1 className="font-bold text-3xl tracking-tight md:text-4xl text-slate-800">
        Featured Insights
      </h1>

      <hr className="mt-2 bg-slate-400" />

      <div className="grid gap-5 mt-5 md:grid-cols-2">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="max-h-32 sm:max-h-full lg:ml-8 lg:w-2/3">
            <img
              src="/src/assets/doc.png"
              alt="Album"
              className="lg:h-4/5 object-cover object-top lg:drop-shadow-md lg:rounded-xl"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title text-2xl">Free Advisory Report!</h2>

            <p className="text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              asperiores omnis labore!
            </p>

            <div className="card-actions justify-center mt-3">
              <Link to="/file" className="w-full">
                <button className="btn btn-block bg-blue-500 text-white rounded-full hover:bg-blue-600">
                  Complete
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="max-h-32 sm:max-h-full lg:ml-8 lg:w-2/3">
            <img
              src="/src/assets/data_driven.jpg"
              alt="Album"
              className="lg:h-4/5 object-cover object-right lg:drop-shadow-md lg:rounded-xl"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title text-2xl">The Data Imperative</h2>

            <p className="text-slate-500">
              Rewrite your data strategy to help capitalize on the digital
              investments made over the last two years.
            </p>

            <div className="card-actions justify-end">
              <Link
                to="https://kpmg.com/xx/en/home/insights/2021/10/rewrite-your-data-strategy-to-capitalize-on-digital-investments.html"
                className="btn"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>

        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="max-h-32 sm:max-h-full lg:ml-8 lg:w-2/3">
            <img
              src="/src/assets/kpmg_enterprise.jpg"
              alt="kpmg_enterprise"
              className="lg:h-4/5 lg:object-cover lg:object-right lg:drop-shadow-md lg:rounded-xl"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title text-2xl">KPMG Connected Enterprise</h2>

            <p className="text-slate-500">
              KPMG's customer centric, agile approach to digital transformation,
              tailored by sector
            </p>

            <div className="card-actions justify-end">
              <Link
                to="https://kpmg.com/xx/en/home/services/advisory/management-consulting/kpmg-connected-enterprise.html"
                className="btn"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>

        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="max-h-32 sm:max-h-full lg:ml-8 lg:w-2/3">
            <img
              src="/src/assets/shaping_future.jpg"
              alt="Album"
              className="lg:h-4/5 lg:object-cover lg:object-right lg:drop-shadow-md lg:rounded-xl"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title text-2xl">Shaping the Future</h2>

            <p className="text-slate-500">
              What does the future hold for your business, your industry and
              your role?
            </p>

            <div className="card-actions justify-end">
              <Link
                to="https://kpmg.com/xx/en/home/services/advisory/management-consulting/shaping-the-future.html"
                className="btn"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedInsights
