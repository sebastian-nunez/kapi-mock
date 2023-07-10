import { useState } from "react"
import CreatorForm from "./CreatorForm"
import { supabase } from "../client"

interface AddCreatorModalProps {
  fetchAll: Function
}

const AddCreatorModal: React.FC<AddCreatorModalProps> = ({ fetchAll }) => {
  const modalId = "add_creator_modal"

  // state
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [youtube, setYoutube] = useState("")
  const [instagram, setInstagram] = useState("")
  const [twitter, setTwitter] = useState("")
  const [linkedin, setLinkedin] = useState("")

  const resetForm = () => {
    setName("")
    setDescription("")
    setImage("")
    setYoutube("")
    setInstagram("")
    setTwitter("")
    setLinkedin("")
  }

  const insertUser = async () => {
    const { data, error } = await supabase
      .from("creators")
      .insert([
        { name, description, image, youtube, instagram, twitter, linkedin },
      ])
      .select()

    if (error) {
      console.error(error)
    }

    fetchAll()
  }

  const handleCreate = () => {
    if (name.length <= 0) {
      alert("Please include the creators name!")
      return
    }

    insertUser()

    // close and reset the form
    resetForm()
    document.getElementById(modalId)?.click()
  }

  return (
    <>
      <input type="checkbox" id={modalId} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-4xl">
          {/* Modal Header */}
          <h3 className="text-4xl font-bold">Add a Creator</h3>

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
            <label
              htmlFor={modalId}
              className="btn"
              onClick={() => resetForm()}
            >
              Cancel
            </label>

            <button className="btn btn-primary px-6" onClick={handleCreate}>
              Create
            </button>
          </div>
        </div>

        <label
          className="modal-backdrop"
          htmlFor={modalId}
          onClick={() => resetForm()}
        >
          Close
        </label>
      </div>
    </>
  )
}

export default AddCreatorModal
