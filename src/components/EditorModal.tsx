interface EditorModalProps {
  modalId: string
  creatorName: string
}

const EditorModal: React.FC<EditorModalProps> = ({ modalId, creatorName }) => {
  const handleDelete = () => {
    console.log("Delete: " + creatorName)
  }

  const handleSave = () => {
    console.log("Save info for: " + creatorName)
  }

  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id={modalId} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-4xl">
          <div className="flex justify-between">
            <h3 className="text-4xl font-bold">Editor Mode</h3>
            <button
              className="btn btn-sm btn-warning rounded-2xl"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>

          <p className="py-4">
            {creatorName}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            nisi a reiciendis, similique ea omnis temporibus magnam iusto. Modi
            dicta totam necessitatibus architecto deleniti numquam placeat
            adipisci consectetur similique ipsam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Numquam dolores rerum voluptatem quod
            id error doloribus aliquid, consequatur quasi dolor exercitationem
            ipsa quae laudantium dolore blanditiis. Hic perspiciatis eveniet
            dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Pariatur alias eveniet sapiente voluptatibus perferendis nobis
            minima in molestiae animi numquam, ipsam totam quod. Hic excepturi
            quia quis labore velit illo.
          </p>

          <div className="modal-action ">
            <label htmlFor={modalId} className="btn">
              Cancel
            </label>

            <button className="btn btn-primary px-6" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>

        <label className="modal-backdrop" htmlFor={modalId}>
          Close
        </label>
      </div>
    </>
  )
}

export default EditorModal
