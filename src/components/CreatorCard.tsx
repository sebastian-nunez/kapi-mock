import { Youtube, Twitter, Linkedin, Instagram } from "lucide-react"

import EditorModal from "./EditorModal"
import { CreatorType } from "../../types/creator"

interface CreatorCardProps extends CreatorType {
  fetchAll: Function
}

const CreatorCard: React.FC<CreatorCardProps> = ({
  id,
  name,
  description,
  image,
  youtube,
  twitter,
  linkedin,
  instagram,
  fetchAll,
}) => {
  // TODO: used a temporary identifier, replaced with creatorId
  const modalId: string = `creator_modal_${id}`

  return (
    <>
      <div className="card card-side border shadow-md">
        <figure className="ml-8 w-1/3">
          <img
            src={image}
            alt="profile picture"
            className="h-4/5 object-cover object-top drop-shadow-md rounded-xl"
          />
        </figure>

        <div className="card-body w-2/3">
          <header className="flex justify-between">
            <h2 className="card-title text-2xl overflow-x-auto">{name}</h2>

            {/* The button to open modal */}
            <label htmlFor={modalId} className="btn btn-sm rounded-xl">
              Edit
            </label>
          </header>

          <EditorModal
            id={id}
            modalId={modalId}
            name={name}
            description={description}
            image={image}
            youtube={youtube}
            twitter={twitter}
            linkedin={linkedin}
            instagram={instagram}
            fetchAll={fetchAll}
          />

          <p>{description}</p>

          <div className="card-actions">
            {youtube && (
              <a
                href={youtube}
                className="btn btn-ghost btn-square text-red-500"
                target="_blank"
              >
                <span className="sr-only">YouTube</span>
                {<Youtube height={50} width={50} />}
              </a>
            )}

            {twitter && (
              <a
                href={twitter}
                className="btn btn-ghost btn-square text-sky-400 "
                target="_blank"
              >
                <span className="sr-only">Twitter</span>
                {<Twitter height={40} width={40} className="fill-current" />}
              </a>
            )}

            {linkedin && (
              <a
                href={linkedin}
                className="btn btn-ghost btn-square text-blue-500 "
                target="_blank"
              >
                <span className="sr-only">LinkedIn</span>
                {<Linkedin height={35} width={35} />}
              </a>
            )}

            {instagram && (
              <a
                href={instagram}
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
    </>
  )
}

export default CreatorCard
