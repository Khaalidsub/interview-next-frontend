import { Box } from "@chakra-ui/react";
import Link from 'next/Link'
import { Post } from "../types";
// import Link from 'next/link'
interface PostCardProps {
    post: Post
}
export default function PostCard({ post }: PostCardProps) {
    return (
        <Box

            padding="4" maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Link href={{ pathname: `/post/${post.id}`, }}>
                <Box

                    lineHeight="tight"
                    isTruncated textAlign="center" fontWeight="semibold" letterSpacing="wide" textTransform="uppercase" color="black">
                    {post.title}
                </Box>
            </Link>
            <Box
                mt="2"
            >
                {post.body}
            </Box>

        </Box>
    )
}
