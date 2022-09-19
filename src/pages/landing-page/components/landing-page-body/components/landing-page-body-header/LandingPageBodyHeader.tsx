import { useState } from "react"
import Button from "../../../../../../components/button/Button"
import Title from "../../../../../../components/title/Title"

type FeedNavigation = 'newest' | 'oldest' | 'activity' | 'popular'

const LandingPageBodyHeader = () => {
  const[active, setActive] = useState<FeedNavigation>('newest')

  return <header className="w-full relative px-2 sm:px-0">
    <section className="w-full flex items-center">
      <img src="/assets/img/hand.png" alt="welcome-icon"/><Title text="Welcome" type="large" className="ml-2 sm:ml-5"></Title>
    </section>
    <section className="flex items-center justify-between h-9 mt-3 sm:mt-6 sm:justify-start">
      <a href="#newest" className={`rounded-lg
        text-xs
        sm:text-sm-intermediate
        sm:leading-4-06
        py-1 px-2
        sm:py-2 sm:px-3.5
        ${active === 'newest' ? 'bg-zinc-75 text-slate-650' : 'text-gray-450' }`}
        onClick={() => setActive('newest')}>
        Newest
      </a>
      <a href="#oldest" className={`rounded-lg
        text-xs
        sm:text-sm-intermediate
        sm:leading-4-06
        py-1 px-2
        sm:py-2 sm:px-3.5
        sm:ml-2
        ${active === 'oldest' ? 'bg-zinc-75 text-slate-650' : 'text-gray-450' }`}
        onClick={() => setActive('oldest')}>
        Oldest
      </a>
      <a href="#activity" className={`rounded-lg
        text-xs
        sm:text-sm-intermediate
        sm:leading-4-06
        py-1 px-2
        sm:py-2 sm:px-3.5
        sm:ml-2
        ${active === 'activity' ? 'bg-zinc-75 text-slate-650' : 'text-gray-450' }`}
        onClick={() => setActive('activity')}>
        Activity
      </a>
      <a href="#popular" className={`rounded-lg
        text-xs
        sm:text-sm-intermediate
        sm:leading-4-06
        py-1 px-2
        sm:py-2 sm:px-3.5
        sm:ml-2
        ${active === 'popular' ? 'bg-zinc-75 text-slate-650' : 'text-gray-450' }`}
        onClick={() => setActive('popular')}>
        Popular
      </a>
    </section>
    <Button text="Customize" className="py-1.5 px-3 text-xs rounded-md bg-indigo-550 font-bold text-white absolute top-4 right-1 sm:top-0 sm:right-0 sm:py-2 sm:px-2.5 sm:text-sm sm:leading-4-05"></Button>
  </header>
}

export default LandingPageBodyHeader
