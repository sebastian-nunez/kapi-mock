import { CreatorType } from "../../types/creator"

interface CreatorFormProps extends CreatorType {
  setName: Function
  setDescription: Function
  setImage: Function
  setYoutube: Function
  setInstagram: Function
  setTwitter: Function
  setLinkedin: Function
}

const CreatorForm: React.FC<CreatorFormProps> = (props) => {
  // TODO: create a form temporary state for the form so when users hits cancel, the ACTUAL state is not saved
  return (
    <form action="#" className="form-control flex gap-2 mt-3">
      <div>
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          placeholder="Full Name"
          className="input input-bordered w-full"
          value={props.name}
          onChange={(e) => props.setName(e.target.value)}
        />
      </div>

      <div>
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea
          className="textarea textarea-bordered textarea-md w-full"
          placeholder="Lorem ipsum dolor sit amet consectetur..."
          value={props.description}
          onChange={(e) => props.setDescription(e.target.value)}
        />
      </div>

      <div>
        <label className="label">
          <span className="label-text">Image</span>
        </label>
        <input
          type="text"
          placeholder="Image URL"
          className="input input-bordered w-full"
          value={props.image}
          onChange={(e) => props.setImage(e.target.value)}
        />
      </div>

      {/* Social Media Link */}
      <div className="grid grid-cols-2 gap-5">
        <div>
          <label className="label">
            <span className="label-text">YouTube</span>
          </label>
          <input
            type="text"
            placeholder="YouTube URL"
            className="input input-bordered w-full"
            value={props.youtube ? props.youtube : ""}
            onChange={(e) => props.setYoutube(e.target.value)}
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Twitter</span>
          </label>
          <input
            type="text"
            placeholder="Twitter URL"
            className="input input-bordered w-full"
            value={props.twitter ? props.twitter : ""}
            onChange={(e) => props.setTwitter(e.target.value)}
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Instagram</span>
          </label>
          <input
            type="text"
            placeholder="Instagram URL"
            className="input input-bordered w-full"
            value={props.instagram ? props.instagram : ""}
            onChange={(e) => props.setInstagram(e.target.value)}
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">LinkedIn</span>
          </label>
          <input
            type="text"
            placeholder="LinkedIn URL"
            className="input input-bordered w-full"
            value={props.linkedin ? props.linkedin : ""}
            onChange={(e) => props.setLinkedin(e.target.value)}
          />
        </div>
      </div>
    </form>
  )
}

export default CreatorForm
