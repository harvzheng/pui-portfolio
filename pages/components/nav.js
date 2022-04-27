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
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} className="px-5 md:px-14 ">
          <HStack spacing={8} alignItems={'center'}>
            <Box>
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