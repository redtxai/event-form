import LandpageBanner from "./components/landpage-banner/LandpageBanner"
import LandpageBody from "./components/landpage-body/LandpageBody"
import LandpageCommunitySidebar from "./components/landpage-community-sidebar/LandpageCommunitySidebar"
import LandpageHeader from "./components/landpage-header/LandpageHeader"


const Landpage = () => {
  return (
    <section className="flex">
      <LandpageCommunitySidebar></LandpageCommunitySidebar>
      <section className="w-full h-screen border-l border-gray-150 grow">
        <LandpageHeader></LandpageHeader>
        <LandpageBanner></LandpageBanner>
        <LandpageBody></LandpageBody>
      </section>
    </section>
  )
}

export default Landpage
