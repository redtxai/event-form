import { months } from "../../../../../../../../components/datepicker/datepicker-mock"
import { Post } from "../../posts-mock-data"

type LandingPagePostprops = {
  post: Post
  className?: string
}

const LandingPagePost = ({ post, className }: LandingPagePostprops) => {
  return <section className={`
    w-full
    border border-gray-150
    rounded-lg
    ${className ? className : ''}`}>
    {post.img && <div className="w-full h-custom-1
    flex justify-center items-center
    text-slate-350 font-bold text-xl
    leading-6
    bg-zinc-75 shadow-custom-slate">Post cover image</div>}
    <div className="pt-4 px-4 sm:pt-7-5 sm:px-7-5">
      <div className="flex items-center">
        <div className="rounded-full w-7-5 h-7-5 bg-slate-350"></div>
        <div className="ml-2.5 text-xs text-slate-650 leading-4-05 tracking-tightish sm:text-sm">{post.username}</div>
        <div className="ml-2.5 text-xs text-gray-450 leading-4-05 tracking-tightish sm:text-sm">{`${months[post.date.getMonth()]} ${post.date.getDate()}`}</div>
      </div>
      {post.title && <div className="text-blue-975 text-lg leading-5 tracking-very-tight font-bold mt-3 sm:mt-6 sm:text-xl-intermediate sm:leading-6-05">{post.title}</div>}
      {post.text && <div className="tracking-tightish text-sm mt-2 text-slate-650 sm:text-base">{post.text}</div>}
    </div>
    <footer className="w-full flex mt-4 sm:mt-7-05">
      <div className="w-1/3 border-t border-r select-none text-xs cursor-pointer text-slate-475 flex justify-center py-2 sm:py-4 sm:text-sm sm:leading-4-05">Reaction</div>
      <div className="w-1/3 border-t border-r select-none text-xs cursor-pointer text-slate-475 flex justify-center py-2 sm:py-4 sm:text-sm sm:leading-4-05">Share</div>
      <div className="w-1/3 border-t border-r select-none text-xs cursor-pointer text-slate-475 flex justify-center py-2 sm:py-4 sm:text-sm sm:leading-4-05">Comment</div>
    </footer>
  </section>
}

export default LandingPagePost
