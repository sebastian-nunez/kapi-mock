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

          <div className="flex sm:justify-end">
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

          <div className="flex justify-between">
            <button
              onClick={() => setSteps((prev) => prev - 1)}
              className="btn rounded-xl"
            >
              Back
            </button>

            <button
              onClick={() => {
                handleSubmit()
              }}
              className="btn bg-blue-500 text-white btn-wide rounded-xl hover:bg-blue-600"
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
          <p className="text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            maiores quidem odio ex rem numquam magnam doloremque, fugiat
            dolorum!
          </p>

          <div className="flex justify-center">
            <Link to="/report">
              <button
                onClick={() => setSteps((prev) => prev + 1)}
                className="btn bg-blue-500 text-white btn-wide rounded-xl hover:bg-blue-600"
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
