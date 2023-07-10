import AddCreatorModal from "./AddCreatorModal"
import CreatorCard from "./CreatorCard"
import Hero from "./Hero"
import { UserPlus2 } from "lucide-react"
import { mockCreators } from "../../mockcreators"
import { Dispatch, useEffect, useState } from "react"
import { supabase } from "../client"
import { CreatorType } from "../../types/creator"
import LoadingCard from "./LoadingCard"

const Home: React.FC = () => {
  const [creators, setCreators]: [any, Dispatch<any>] = useState([])

  const fetchAll = async () => {
    const { data, error } = await supabase.from("creators").select()

    setCreators(data)
    if (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (creators.length <= 0) {
      fetchAll()
    }
  }, [creators])

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

        <AddCreatorModal fetchAll={fetchAll} />

        <br />

        {/* Creator Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {creators ? (
            creators.map((creator: CreatorType) => (
              <CreatorCard key={creator.id} {...creator} fetchAll={fetchAll} />
            ))
          ) : (
            <>
              <LoadingCard />
              <LoadingCard />
            </>
          )}
        </div>
      </section>
    </div>
  )
}

export default Home
