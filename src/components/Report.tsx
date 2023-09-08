import { Link } from "react-router-dom"

const Report: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold mx-6 my-6 text-info">
        Advisory Report
      </h1>

      <div
        className="h-screen"
        style={{ maxWidth: "100%", overflowX: "hidden" }}
      >
        <iframe
          src="https://docs.google.com/gview?url=https://docs.google.com/document/d/1hMw9q7l9Wbd2s3iO5CQcBcRqWSFI11UzgwWoaaXFabc/export?format=pdf&embedded=true"
          style={{ width: "100%", height: "100%" }}
        >
          <p>
            Unable to display PDF file.{" "}
            <a href="https://docs.google.com/document/d/1hMw9q7l9Wbd2s3iO5CQcBcRqWSFI11UzgwWoaaXFabc/export?format=pdf">
              Download
            </a>{" "}
            instead.
          </p>
        </iframe>
      </div>
      <div className="flex justify-center mt-12">
        <Link to="/">
          <button className="btn rounded-full btn-wide bg-blue-500 text-white hover:bg-blue-600">
            Home
          </button>
        </Link>
      </div>
    </>
  )
}

export default Report
