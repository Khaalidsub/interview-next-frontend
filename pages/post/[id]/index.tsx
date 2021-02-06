import { useRouter } from 'next/router'
import { axios } from '../../../util'
import { Post as post, Comment } from '../../../types'
import Link from 'next/Link'
import Navigation from "../../../components/Navigation"
import CommentCard from '../../../components/CommentCard'

export interface PostProps {
    post: post
    comments: Comment[]
}
export const Post = ({ post, comments }: PostProps) => {

    const RenderComments = () => {
        return (
            <>
                {comments.map((comment) => {
                    return <CommentCard comment={comment} />
                })}
            </>
        )
    }
    return (
        <
            >




            <Navigation>
                <h4 className="text-center text-xl font-bold capitalize    p-3" >{post.title}</h4>
            </Navigation>
            <div className="max-w-xl mx-auto "> <div className="bg-black text-white inline-block p-2 text-sm px-5 rounded-md m-2"><Link href="/"> Back </Link></div></div>
            <div className="max-w-xl mx-auto p-12 pt-9 border rounded-md">
                <h3 className="text-2xl font-semibold">Comments</h3>
                <RenderComments />
            </div>
        </>

    )
}

export const getStaticProps = async (context) => {
    const response = await axios.get<post>(`/posts/${context.params.id}`)
    const { data } = await axios.get<Comment[]>(`/comments?postId=${context.params.id}`)


    return {
        props: {
            post: response.data,
            comments: data
        }
    }
}
export const getStaticPaths = async () => {
    const response = await axios.get<post[]>(`/posts`)
    const ids = response.data.map(post => post.id)
    const paths = ids.map(id => ({ params: { id: id.toString() } }))
    return {
        paths,
        fallback: false,
    }


}

export default Post