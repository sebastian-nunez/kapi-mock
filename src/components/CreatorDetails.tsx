import { useNavigate, useParams } from "react-router-dom"
import { CreatorType } from "../../types/creator"
import { useEffect, useState } from "react"
import { supabase } from "../client"
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import LoadingCard from "./LoadingCard"

const CreatorDetails: React.FC = () => {
  const { creatorId } = useParams()
  const navigate = useNavigate()

  const [creator, setCreator] = useState<CreatorType | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select()
        .eq("id", creatorId)
        .limit(1)
        .single()

      setCreator(data as CreatorType)
      setLoading(false)
      if (error) {
        console.error(error)
      }
    }

    fetchCreator()
  }, [])

  if (loading)
    return (
      <div className="w-1/2 mx-auto">
        <LoadingCard />
      </div>
    )

  if (!creator)
    return (
      <h1 className="text-center font-bold text-6xl">
        Creator with ID {creatorId} was NOT found!
      </h1>
    )

  return (
    <div className="mt-5">
      <div className="card border shadow-md w-1/2 flex mx-auto p-10 ">
        <h1 className="card-title text-5xl mx-auto overflow-y-none mb-7">
          {creator.name}
        </h1>

        <figure className="">
          <img
            src={creator.image}
            alt="profile picture"
            className="h-1/4 object-cover object-top drop-shadow-md rounded-xl"
          />
        </figure>

        <div className="card-body">
          <p>{creator.description}</p>

          <div className="card-actions">
            {creator.youtube && (
              <a
                href={creator.youtube}
                className="btn btn-ghost btn-square text-red-500"
                target="_blank"
              >
                <span className="sr-only">YouTube</span>
                {<Youtube height={50} width={50} />}
              </a>
            )}

            {creator.twitter && (
              <a
                href={creator.twitter}
                className="btn btn-ghost btn-square text-sky-400 "
                target="_blank"
              >
                <span className="sr-only">Twitter</span>
                {<Twitter height={40} width={40} className="fill-current" />}
              </a>
            )}

            {creator.linkedin && (
              <a
                href={creator.linkedin}
                className="btn btn-ghost btn-square text-blue-500 "
                target="_blank"
              >
                <span className="sr-only">LinkedIn</span>
                {<Linkedin height={35} width={35} />}
              </a>
            )}

            {creator.instagram && (
              <a
                href={creator.instagram}
                className="btn btn-ghost btn-square text-pink-600"
                target="_blank"
              >
                <span className="sr-only">Instagram</span>
                {<Instagram height={35} width={35} />}
              </a>
            )}
          </div>
        </div>
      </div>

      <button className="btn ml-20 rounded-2xl" onClick={() => navigate(-1)}>
        back
      </button>
    </div>
  )
}

export default CreatorDetails
