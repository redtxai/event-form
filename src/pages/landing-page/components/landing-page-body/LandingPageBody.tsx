import LandingPageBodyHeader from "./components/landing-page-body-header/LandingPageBodyHeader"
import LandingPageFeed from "./components/landing-page-feed/LandingPageFeed"
import LandingPageSidebar from "./components/landing-page-sidebar/LandingPageSidebar"

const LandingPageBody = () => {
  return <section className="max-w-1xl m-auto mt-9">
    <LandingPageBodyHeader></LandingPageBodyHeader>
    <section className="w-full flex justify-between mt-13">
      <LandingPageFeed></LandingPageFeed>
      <LandingPageSidebar></LandingPageSidebar>
    </section>
  </section>
}

export default LandingPageBody
