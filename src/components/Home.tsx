import AddCreatorModal from "./AddCreatorModal"
import CreatorCard from "./CreatorCard"
import Hero from "./Hero"
import { UserPlus2 } from "lucide-react"
import { mockCreators } from "../../mockcreators"

const Home: React.FC = () => {
  return (
    <div className="">
      <Hero />

      <section className="px-5">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="font-bold text-5xl tracking-tight">Creator Browser</h1>

          <label
            htmlFor="add_creator_modal"
            className="btn btn-outline rounded-xl shadow-sm mt-4 md:mt-0"
          >
            <span>
              <UserPlus2 />
            </span>{" "}
            Creator
          </label>
        </div>

        <AddCreatorModal />

        <br />

        {/* Creator Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mockCreators.map((creator) => (
            <CreatorCard {...creator} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
