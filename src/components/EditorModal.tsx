import { useState } from "react"
import CreatorForm from "./CreatorForm"
import { CreatorType } from "../../types/creator"
import { supabase } from "../client"

interface EditorModalProps extends CreatorType {
  modalId: string
  fetchAll: Function
}

const EditorModal: React.FC<EditorModalProps> = (props) => {
  const id = props.id
  const [name, setName] = useState(props.name)
  const [description, setDescription] = useState(props.description)
  const [image, setImage] = useState(props.image)
  const [youtube, setYoutube] = useState(props.youtube)
  const [instagram, setInstagram] = useState(props.instagram)
  const [twitter, setTwitter] = useState(props.twitter)
  const [linkedin, setLinkedin] = useState(props.linkedin)

  const handleDelete = async () => {
    const { error } = await supabase.from("creators").delete().eq("id", id)

    props.fetchAll()

    if (error) {
      console.error(error)
    }

    // close the form
    document.getElementById(props.modalId)?.click()
  }

  const saveUser = async () => {
    const { error } = await supabase
      .from("creators")
      .update({
        name,
        description,
        image,
        youtube,
        instagram,
        twitter,
        linkedin,
      })
      .eq("id", id)
      .select()

    props.fetchAll()

    if (error) {
      console.error(error)
    }
  }

  const handleSave = () => {
    if (name.length <= 0) {
      alert("Please include the creators name!")
      return
    }

    saveUser()

    // close the form
    document.getElementById(props.modalId)?.click()
  }

  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id={props.modalId} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-4xl">
          {/* Modal Header */}
          <div className="flex justify-between">
            <h3 className="text-4xl font-bold">Edit Mode</h3>
            <button
              className="btn btn-sm btn-warning rounded-2xl"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>

          {/* Modal Body */}
          <CreatorForm
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
            image={image}
            setImage={setImage}
            youtube={youtube}
            setYoutube={setYoutube}
            instagram={instagram}
            setInstagram={setInstagram}
            linkedin={linkedin}
            setLinkedin={setLinkedin}
            twitter={twitter}
            setTwitter={setTwitter}
          />

          {/* Modal Footer */}
          <div className="modal-action">
            <label htmlFor={props.modalId} className="btn">
              Cancel
            </label>

            <button className="btn btn-primary px-6" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>

        <label className="modal-backdrop" htmlFor={props.modalId}>
          Close
        </label>
      </div>
    </>
  )
}

export default EditorModal
