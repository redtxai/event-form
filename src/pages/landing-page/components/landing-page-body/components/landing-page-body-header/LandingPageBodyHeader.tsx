import { useState } from "react"
import Button from "../../../../../../components/button/Button"
import Title from "../../../../../../components/title/Title"

type FeedNavigation = 'newest' | 'oldest' | 'activity' | 'popular'

const LandingPageBodyHeader = () => {
  const[active, setActive] = useState<FeedNavigation>('newest')

  return <header className="w-full relative">
    <section className="w-full flex items-center">
      <img src="/assets/img/hand.png" alt="welcome-icon"/><Title text="Welcome" type="large" className="ml-5"></Title>
    </section>
    <section className="flex items-center h-9 mt-6">
      <a href="#newest" className={`rounded-lg
        text-sm-intermediate
        leading-4-06
        py-2 px-3.5
        ${active === 'newest' ? 'bg-zinc-75 text-slate-650' : 'text-gray-450' }`}
        onClick={() => setActive('newest')}>
        Newest
      </a>
      <a href="#oldest" className={`rounded-lg
        text-sm-intermediate
        leading-4-06
        py-2 px-3.5
        ml-2
        ${active === 'oldest' ? 'bg-zinc-75 text-slate-650' : 'text-gray-450' }`}
        onClick={() => setActive('oldest')}>
        Oldest
      </a>
      <a href="#activity" className={`rounded-lg
        text-sm-intermediate
        leading-4-06
        py-2 px-3.5
        ml-2
        ${active === 'activity' ? 'bg-zinc-75 text-slate-650' : 'text-gray-450' }`}
        onClick={() => setActive('activity')}>
        Activity
      </a>
      <a href="#popular" className={`rounded-lg
        text-sm-intermediate
        leading-4-06
        py-2 px-3.5
        ml-2
        ${active === 'popular' ? 'bg-zinc-75 text-slate-650' : 'text-gray-450' }`}
        onClick={() => setActive('popular')}>
        Popular
      </a>
    </section>
    <Button text="Customize" className="py-2 px-2.5 rounded-md bg-indigo-550 font-bold text-sm text-white leading-4-05 absolute top-0 right-0"></Button>
  </header>
}

export default LandingPageBodyHeader
