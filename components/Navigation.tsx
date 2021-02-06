import {
    Box, Container, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator
} from "@chakra-ui/react";

export default function Navigation() {
    return (
        <Container mt="20" maxW="6xl">
            <Box padding="4" maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden" >
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Posts</BreadcrumbLink>
                    </BreadcrumbItem>

                </Breadcrumb>
            </Box>
        </Container>
    )
}
