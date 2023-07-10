import CreatorCard from "./CreatorCard"
import Hero from "./Hero"
import { UserPlus2 } from "lucide-react"

const Home: React.FC = () => {
  const handleAddCreator = () => {
    console.log("Add creator!")
  }

  return (
    <div className="">
      <Hero />

      <section className="px-5">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="font-bold text-5xl tracking-tight">Creator Browser</h1>

          <button
            className="btn btn-outline rounded-xl shadow-sm mt-4 md:mt-0"
            onClick={handleAddCreator}
          >
            <span>
              <UserPlus2 />
            </span>{" "}
            Creator
          </button>
        </div>

        <br />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CreatorCard
            name="MKBHD"
            imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Marques_Brownlee_cropped.jpg/1200px-Marques_Brownlee_cropped.jpg"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum dolorem
            iure rerum suscipit praesentium sunt aspernatur officia, numquam
            voluptatibus. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit."
            youtubeLink="https://www.youtube.com/channel/UCBJycsmduvYEL83R_U4JriQ"
          />

          <CreatorCard
            name="Mark Rober"
            imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Mark_Rober_2020.jpg/800px-Mark_Rober_2020.jpg"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quidem mollitia vel expedita, veniam quibusdam!"
            youtubeLink="https://www.youtube.com/channel/UCY1kMZp36IQSyNx_9h4mpCg"
            linkedinLink="https://www.linkedin.com/in/mark-rober-a56a6b99"
          />

          <CreatorCard
            name="iJustine"
            imgSrc="https://images-na.ssl-images-amazon.com/images/S/influencer-profile-image-prod/logo/ijustine_1660841906436_original._CR0,4,1502,1502_._FMjpg_.jpeg"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa alias dolorum doloremque provident mollitia tempora, laborum atque voluptatibus nesciunt."
            youtubeLink="https://www.youtube.com/channel/UCey_c7U86mJGz1VJWH5CYPA"
            twitterLink="https://twitter.com/ijustine"
          />

          <CreatorCard
            name="Austin Evans"
            imgSrc="https://healthyceleb.com/wp-content/uploads/2020/02/Austin-Evans-as-seen-in-a-picture-taken-in-February-2020-1.jpg"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero esse veniam ipsam fugit modi. Alias!"
            youtubeLink="https://www.youtube.com/@austinevans"
          />

          <CreatorCard
            name="Unbox Therapy"
            imgSrc="https://influencermatchmaker.co.uk/assets/influencer-profiles/unbox-therapy/unboxtherapy2.jfif"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, distinctio."
            youtubeLink="https://www.youtube.com/@unboxtherapy"
          />

          <CreatorCard
            name="Sara Dietschy"
            imgSrc="https://yt3.googleusercontent.com/ytc/AOPolaRwAAcwpRROlkrt-6YG2eTfMwVL0ewsOE-mh90O4sM=s900-c-k-c0x00ffffff-no-rj"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt soluta accusamus magnam pariatur laudantium optio?"
            youtubeLink="https://www.youtube.com/channel/UC3fg6pL63upkXCc0T203wVg"
            instagramLink="https://www.instagram.com/saradietschy/"
          />
        </div>
      </section>
    </div>
  )
}

export default Home
