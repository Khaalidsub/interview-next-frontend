
import { Post } from "../types"
import { axios, imageApi } from "../util"
import { GetStaticProps } from 'next'
import PostCard from "../components/PostCard"
import Navigation from "../components/Navigation"
export interface PostsProps {
  posts: Post[]
}
export const Posts = ({ posts }: PostsProps) => {

  const RenderPosts = () => {
    return <> {posts?.map((post) => {
      return (


        <PostCard key={post.id} post={post} />


      )
    })
    }

    </>
  }

  return (
    <>

      <Navigation />


      <div className="flex flex-wrap justify-center" >
        <RenderPosts />

      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get<Post[]>('/posts?_limit=20')
  const imageResponse = await imageApi.get('/list?page=1&limit=20')
  const posts = data.map((post, i) => {


    return { ...post, image: imageResponse.data[i].download_url }
  })
  return {
    props: { posts }
  }
}


export default Posts

