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
    <div className="pt-7-5 pr-7-5 pl-7-5">
      <div className="flex items-center">
        <div className="rounded-full w-7-5 h-7-5 bg-slate-350"></div>
        <div className="ml-2.5 text-sm text-slate-650 leading-4-05 tracking-tightish">{post.username}</div>
        <div className="ml-2.5 text-sm text-gray-450 leading-4-05 tracking-tightish">{`${months[post.date.getMonth()]} ${post.date.getDate()}`}</div>
      </div>
      {post.title && <div className="text-blue-975 text-xl-intermediate leading-6-05 tracking-very-tight font-bold mt-6">{post.title}</div>}
      {post.text && <div className="tracking-tightish text-base mt-2 text-slate-650">{post.text}</div>}
    </div>
    <footer className="w-full flex mt-7-05">
      <div className="w-1/3 border-t border-r select-none text-sm cursor-pointer text-slate-475 leading-4-05 flex justify-center py-4">Reaction</div>
      <div className="w-1/3 border-t border-r select-none text-sm cursor-pointer text-slate-475 leading-4-05 flex justify-center py-4">Share</div>
      <div className="w-1/3 border-t border-r select-none text-sm cursor-pointer text-slate-475 leading-4-05 flex justify-center py-4">Comment</div>
    </footer>
  </section>
}

export default LandingPagePost
