import LandingPageBanner from "./components/landing-page-banner/LandingPageBanner"
import LandingPageBody from "./components/landing-page-body/LandingPageBody"
import LandingPageCommunitySidebar from "./components/landing-page-community-sidebar/LandingPageCommunitySidebar"
import LandingPageHeader from "./components/landing-page-header/LandingPageHeader"


const LandingPage = () => {
  return (
    <section className="flex relative">
      <LandingPageCommunitySidebar></LandingPageCommunitySidebar>
      <section className="w-full border-l border-gray-150 grow">
        <LandingPageHeader></LandingPageHeader>
        <LandingPageBanner></LandingPageBanner>
        <LandingPageBody></LandingPageBody>
      </section>
    </section>
  )
}

export default LandingPage
