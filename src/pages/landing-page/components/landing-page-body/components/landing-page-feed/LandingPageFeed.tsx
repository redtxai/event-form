import { useState } from "react"
import LandingPagePost from "./components/landing-page-feed-post/LandingPagePost"
import { Post, posts } from "./posts-mock-data"

const LandingPageFeed = () => {
  const [postsArray] = useState<Post[]>(posts)
  return <section className="w-full max-w-2-5xl">
    {postsArray.map((post, index) => <LandingPagePost key={post.id} post={post} className={index > 0 ? 'mt-12' : ''}></LandingPagePost>)}
  </section>
}

export default LandingPageFeed
