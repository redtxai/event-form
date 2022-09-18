import { useState } from "react"
import Button from "../../../../components/button/Button"

import './LandingPageCommunitySidebar.css'

const LandingPageCommunitySidebar = () => {
  const[showMenu, setShowMenu] = useState<boolean>(false)
  return <>
    <section className="h-full w-12 p-2 bg-stone-950 absolute inset-y-0 left-0 z-30 sm:w-16 sm:p-4">
      <Button className="w-8 h-8 rounded-md" onClick={() => setShowMenu(!showMenu)}><img src="assets/img/circle-icon.png" alt="circle"/></Button>
      <Button className="w-8 h-8 rounded-md bg-custom-150 mt-4"></Button>
      <Button className="w-8 h-8 rounded-md bg-custom-150 mt-4"></Button>
    </section>
    <section className={`h-full w-70 bg-custom-200 px-6 py-6 absolute inset-y-0 z-20 initial-position ${showMenu ? 'opened' : ''}`}>
      <div className="w-full font-bold text-xl leading-6 text-slate-350">Community Sidebar</div>
      <div className="mt-8 mb-14">
        <div className="font-normal text-blue-985 text-base leading-4-07">Group #1</div>
        <div className="font-normal text-slate-475 tracking-medium-tight text-base leading-4-07 mt-4 flex items-center cursor-pointer"><div className="w-3.5 h-3.5 bg-slate-350 rounded-semi-sm mr-1"></div>Space #1</div>
        <div className="font-normal text-slate-475 tracking-medium-tight text-base leading-4-07 mt-4 flex items-center cursor-pointer"><div className="w-3.5 h-3.5 bg-slate-350 rounded-semi-sm mr-1"></div>Space #2</div>
        <div className="font-normal text-slate-475 tracking-medium-tight text-base leading-4-07 mt-4 flex items-center cursor-pointer"><div className="w-3.5 h-3.5 bg-slate-350 rounded-semi-sm mr-1"></div>Space #3</div>
      </div>
      <div className="mt-6 mb-12">
        <div className="font-medium text-blue-985 leading-4-07">Group #2</div>
        <div className="font-normal text-slate-475 tracking-medium-tight text-base leading-4-07 mt-4 flex items-center cursor-pointer"><div className="w-3.5 h-3.5 bg-slate-350 rounded-semi-sm mr-1"></div>Space #4</div>
        <div className="font-normal text-slate-475 tracking-medium-tight text-base leading-4-07 mt-4 flex items-center cursor-pointer"><div className="w-3.5 h-3.5 bg-slate-350 rounded-semi-sm mr-1"></div>Space #5</div>
        <div className="font-normal text-slate-475 tracking-medium-tight text-base leading-4-07 mt-4 flex items-center cursor-pointer"><div className="w-3.5 h-3.5 bg-slate-350 rounded-semi-sm mr-1"></div>Space #6</div>
        <div className="font-normal text-slate-475 tracking-medium-tight text-base leading-4-07 mt-4 flex items-center cursor-pointer"><div className="w-3.5 h-3.5 bg-slate-350 rounded-semi-sm mr-1"></div>Space #7</div>
        <div className="font-normal text-slate-475 tracking-medium-tight text-base leading-4-07 mt-4 flex items-center cursor-pointer"><div className="w-3.5 h-3.5 bg-slate-350 rounded-semi-sm mr-1"></div>Space #8</div>
      </div>
    </section>
    <section className={`absolute inset-0 z-10 bg-white opacity-50 ${showMenu ? 'block' : 'hidden'}`} onClick={() => setShowMenu(!showMenu)}>
    </section>
  </>
}

export default LandingPageCommunitySidebar
