import FeaturedInsights from "./FeaturedInsights"
import Hero from "./Hero"
import Services from "./Services"

const Home: React.FC = () => {
  return (
    <div className="">
      <Hero />

      <FeaturedInsights />

      <Services />
    </div>
  )
}

export default Home
