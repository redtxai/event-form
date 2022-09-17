import LandpageFeed from "./components/landpage-feed/LandpageFeed"
import LandpageSidebar from "./components/landpage-sidebar/LandpageSidebar"

const LandpageBody = () => {
  return <section className="max-w-1xl m-auto flex justify-between">
    <LandpageFeed></LandpageFeed>
    <LandpageSidebar></LandpageSidebar>
  </section>
}

export default LandpageBody
