import { useState } from "react"
import { Link } from "react-router-dom"

const Survey: React.FC = () => {
  const [step, setSteps] = useState(1)

  const handleSubmit = () => {
    setSteps((prev) => prev + 1)

    console.log("Submitted survey!")
  }

  const display_steps = () => {
    if (step == 1) {
      return (
        <>
          <h1 className="text-3xl font-bold ">Contact Information</h1>

          <div className="md:flex gap-3">
            <div className="w-full">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered w-full"
              />
            </div>

            <div className="w-full">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="md:flex gap-3">
            <div className="w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                className="input input-bordered w-full"
              />
            </div>

            <div className="w-full">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                placeholder="111-111-1111"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="md:flex gap-3">
            <div className="w-full">
              <label className="label">
                <span className="label-text">Company / Organization</span>
              </label>
              <input
                type="email"
                placeholder="KPMG"
                className="input input-bordered w-full"
              />
            </div>

            <div className="w-full">
              <label className="label">
                <span className="label-text">Industry / Sector</span>
              </label>

              <select className="select select-bordered w-full">
                <option disabled selected>
                  Select
                </option>
                <option>Automotive</option>
                <option>Financial Services</option>
                <option>Food, Drink and Consumer Goods</option>
                <option>Healthcare</option>
                <option>Infrastructure</option>
                <option>Retail</option>
                <option>Technology</option>
                <option>Transport and Logistics</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center sm:justify-end mt-5">
            <button
              onClick={() => setSteps((prev) => prev + 1)}
              className="btn btn-wide rounded-xl"
            >
              Next
            </button>
          </div>
        </>
      )
    } else if (step == 2) {
      return (
        <>
          <h1 className="text-3xl font-bold">Survey Information</h1>

          <div className="w-full">
            <label className="label">
              <span className="label-text">
                Are you a <em>KAPI</em> client?
              </span>
            </label>

            <div className="flex gap-5">
              <label className="label cursor-pointer">
                <input type="radio" name="radio-1" className="radio" />
                <span className="label-text ml-3">Yes</span>
              </label>

              <label className="label cursor-pointer">
                <input type="radio" name="radio-1" className="radio" />
                <span className="label-text ml-3">No</span>
              </label>
            </div>
          </div>

          <div className="w-full">
            <label className="label">
              <span className="label-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
                nihil, labore adipisci accusantium dolorem explicabo?
              </span>
            </label>

            <div className="flex flex-col">
              <label className="label cursor-pointer">
                <input type="radio" name="radio-1" className="radio" />
                <span className="label-text">Lorem ipsum.</span>
              </label>

              <label className="label cursor-pointer">
                <input type="radio" name="radio-1" className="radio" />
                <span className="label-text">Lorem, ipsum dolor.</span>
              </label>

              <label className="label cursor-pointer">
                <input type="radio" name="radio-1" className="radio" />
                <span className="label-text">Lorem ipsum dolor sit amet.</span>
              </label>
              <label className="label cursor-pointer">
                <input type="radio" name="radio-1" className="radio" />
                <span className="label-text">Lorem ipsum dolor amet.</span>
              </label>
            </div>
          </div>

          <div className="w-full">
            <label className="label">
              <span className="label-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing explicabo?
              </span>
            </label>

            <div className="flex flex-col">
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Select
                </option>
                <option>Dolor</option>
                <option>Beate in Abe</option>
                <option>Cumque</option>
                <option>necessitatibus illo</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <section className="mt-5 space-y-2">
            <p className="italic text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
              fugit architecto aspernatur pariatur tempora totam. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Temporibus, ad?
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>

            <p className="italic text-sm">
              Lorem ipsum, Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Temporibus, ad? Lorem ipsum dolor sit amet. Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
          </section>

          <label className="label cursor-pointer">
            <input type="checkbox" className="checkbox" />

            <span className="label-text ml-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis,
              itaque.
            </span>
          </label>

          <div className="flex justify-between">
            <button
              onClick={() => setSteps((prev) => prev - 1)}
              className="btn rounded-xl mt-6"
            >
              Back
            </button>

            <button
              onClick={() => {
                handleSubmit()
              }}
              className="btn bg-blue-500 text-white sm:btn-wide rounded-xl hover:bg-blue-600 mt-6"
            >
              Submit
            </button>
          </div>
        </>
      )
    } else {
      return (
        <>
          <h1 className="text-3xl font-bold">Submission</h1>
          <em className="text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            maiores quidem odio ex rem numquam magnam doloremque, fugiat
            dolorum!
          </em>

          <div className="flex justify-center">
            <Link to="/report">
              <button
                onClick={() => setSteps((prev) => prev + 1)}
                className="btn bg-blue-500 text-white btn-wide rounded-xl hover:bg-blue-600 mt-6"
              >
                View Report
              </button>
            </Link>
          </div>
        </>
      )
    }
  }

  return (
    <div className="card mx-auto lg:w-2/3 lg:shadow-lg">
      <div className="card-body">{display_steps()}</div>
    </div>
  )
}

export default Survey
