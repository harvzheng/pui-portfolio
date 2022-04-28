// Extremely simple top nav that just has a name
import { ReactNode } from 'react';
import {
  Container,
  Box,
  Flex,
  HStack,
  Link
} from '@chakra-ui/react';

export default function Nav() {

  return (
    <>
      <Container px={4} maxW='container.xl' className="py-3">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'} >
            <Box className="px-4 py-3" style={{border: "1px solid white"}}>
              <Link href="/" color="gray.50">
                Harvey Zheng
              </Link>
            </Box>
          </HStack>
        </Flex>
      </Container>
    </>
  );
}