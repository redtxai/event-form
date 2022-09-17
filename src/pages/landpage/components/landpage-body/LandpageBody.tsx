import LandpageBodyHeader from "./components/landpage-body-header/LandpageBodyHeader"
import LandpageFeed from "./components/landpage-feed/LandpageFeed"
import LandpageSidebar from "./components/landpage-sidebar/LandpageSidebar"

const LandpageBody = () => {
  return <section className="max-w-1xl m-auto mt-9">
    <LandpageBodyHeader></LandpageBodyHeader>
    <section className="w-full flex justify-between mt-13">
      <LandpageFeed></LandpageFeed>
      <LandpageSidebar></LandpageSidebar>
    </section>
  </section>
}

export default LandpageBody
