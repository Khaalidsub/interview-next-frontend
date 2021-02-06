import { AxiosResponse } from "axios"
import { Post } from "../types"
import { axios } from "../util"
import { GetStaticProps } from 'next'
import { SimpleGrid, Box, Container, Flex, Spacer, Grid } from "@chakra-ui/react"
import post from "./post/[id]"
// import React from "react"
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
      <Container mt="22" maxW="6xl"  >

        <SimpleGrid minChildWidth="340px" spacing="40px">
          <RenderPosts />
        </SimpleGrid>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get<Post[]>('/posts?_limit=20')


  return {
    props: { posts: [...response.data] }
  }
}


export default Posts

