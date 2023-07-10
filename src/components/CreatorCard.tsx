import { Youtube, Twitter, Linkedin, Instagram } from "lucide-react"

import EditorModal from "./EditorModal"

interface CreatorCardProps {
  name: string
  description: string
  imgSrc: string
  youtubeLink: string
  twitterLink?: string
  linkedinLink?: string
  instagramLink?: string
}

const CreatorCard: React.FC<CreatorCardProps> = ({
  name,
  description,
  imgSrc,
  youtubeLink,
  twitterLink,
  linkedinLink,
  instagramLink,
}) => {
  // TODO: used a temporary identifier, replaced with creatorId
  const modalId: string = `creator_modal_${new Date().getTime()}`

  return (
    <>
      <div className="card card-side border shadow-md ">
        <figure className="ml-8 w-1/3">
          <img
            src={imgSrc}
            alt="profile picture"
            className="h-4/5 object-cover object-top drop-shadow-md rounded-xl"
          />
        </figure>

        <div className="card-body w-2/3">
          <header className="flex justify-between">
            <h2 className="card-title text-2xl">{name}</h2>

            {/* The button to open modal */}
            <label htmlFor={modalId} className="btn btn-sm rounded-2xl">
              Edit
            </label>
          </header>

          <p>{description}</p>

          <div className="card-actions">
            <a
              href={youtubeLink}
              className="btn btn-ghost btn-square text-red-500"
              target="_blank"
            >
              <span className="sr-only">YouTube</span>
              {<Youtube height={50} width={50} />}
            </a>

            {twitterLink && (
              <a
                href={twitterLink}
                className="btn btn-ghost btn-square text-sky-400 "
                target="_blank"
              >
                <span className="sr-only">Twitter</span>
                {<Twitter height={40} width={40} className="fill-current" />}
              </a>
            )}

            {linkedinLink && (
              <a
                href={linkedinLink}
                className="btn btn-ghost btn-square text-blue-500 "
                target="_blank"
              >
                <span className="sr-only">LinkedIn</span>
                {<Linkedin height={35} width={35} />}
              </a>
            )}

            {instagramLink && (
              <a
                href={instagramLink}
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

      <EditorModal modalId={modalId} creatorName={name} />
    </>
  )
}

export default CreatorCard
