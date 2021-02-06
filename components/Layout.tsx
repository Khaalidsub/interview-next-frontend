import { ChakraProvider } from "@chakra-ui/react"
import React from "react"

export const Layout = ({ children }) => {
    return (
        <>

            <ChakraProvider>





                {children}
            </ChakraProvider>
        </>
    )
}
