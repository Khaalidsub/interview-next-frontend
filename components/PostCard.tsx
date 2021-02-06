import { Box } from "@chakra-ui/react";

import { Post } from "../types";

interface PostCardProps {
    post: Post
}
export default function PostCard({ post }: PostCardProps) {
    return (
        <Box

            padding="4" maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box

                lineHeight="tight"
                isTruncated textAlign="center" fontWeight="semibold" letterSpacing="wide" textTransform="uppercase" color="black">
                {post.title}
            </Box>
            <Box
                mt="2"
            >
                {post.body}
            </Box>

        </Box>
    )
}
