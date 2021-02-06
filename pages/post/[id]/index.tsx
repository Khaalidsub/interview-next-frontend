import { useRouter } from 'next/router'
import { axios } from '../../../util'
import { Post as post } from '../../../types'
import Link from 'next/Link'
import { Box } from '@chakra-ui/react'
export interface PostProps {
    post: post
}
export const Post = ({ post }: PostProps) => {
    const router = useRouter()

    return (
        <Box>

            <Link href="/" >Go Back</Link>
        </Box>
    )
}

export const getStaticProps = async (context) => {
    const response = await axios.get<post>(`/posts/${context.params.id}`)
    return {
        props: {
            post: response.data
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