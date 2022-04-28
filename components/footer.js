// A footer component
// Includes links to profiles, social, and email
import {
  Box,
  Icon,
  Button,
  IconButton,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Link,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { EmailIcon, ArrowForwardIcon, ExternalLinkIcon } from '@chakra-ui/icons'

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>Harvey Zheng 2022</Text>
        <Stack direction={'row'} spacing={6} alignItems={"center"}>
          <Link isExternal={true} href="https://drive.google.com/file/d/1k0_CFHj0QcoZldZg4p28qgCaMoaAgzbW/view?usp=sharing" colorScheme='teal' variant='outline'>
            Resume
          </Link>
          <Link href="mailto:harveyz@andrew.cmu.edu">
            <IconButton aria-label='email link' icon={<EmailIcon />} />
          </Link>
          <Link isExternal={true} href="http://instagram.com/hzh101">
            <IconButton aria-label='Instagram profile' icon={<FaInstagram />} />
          </Link>
          <Link isExternal={true} href="https://www.linkedin.com/in/85464885/">
            <IconButton aria-label='LinkedIn profile' icon={<FaLinkedin />} />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}