// an about page
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head'
import Menu from '../components/menu'
import Blob from '../components/blob'

import Nav from '../components/nav'
import styles from '../styles/Home.module.css'
import { Container, List } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Box, Text, Image, Link} from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


export default function UX() {
  return (
    <div className={styles.container} height="100vh">
      <Head>
        <title>About | Harvey Zheng</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Container maxW='container.xl'>
        <Flex className="flex-col md:flex-row items-center md:items-start">
          <Flex direction="column">
            <Menu index={3}/>
          </Flex>
          <Flex grow={1} className={styles.mainContent} >
            <Flex className="items-end flex-col md:flex-row">
              <Box className="w-full lg:w-3/4">
                <Heading>About Me</Heading>
              </Box>
              <Image src="./images/portrait.jpeg" className="w-full md:w-1/4" borderRadius="full"/>
            </Flex>

            <Flex className="my-4" direction="column" id="overview">
              <Text className="my-4" fontSize="2xl">Hi! I&apos;m Harvey, and I&apos;m currently a junior at Carnegie Mellon University, where I study Statistics and Machine Learning with an additional major in Human Computer Interaction.</Text>
              <Text className="my-4" fontSize="2xl">I have experience on both the design and development sides of web apps, in addition to interning at the startup <Link className="italic" color="green.200" href="http://apollo.io">Apollo.io</Link> in the past.</Text>
              <Text className="my-4" fontSize="2xl">This summer, I&apos;ll be working in New York at <Link className="italic" color="green.200">COMPANY</Link> as a UX Design Intern.</Text>
              <Text className="my-4" fontSize="2xl">Outside of academics, I follow basketball (go Celtics!) and enjoy reading.</Text>
              <Heading className="my-4 italic" as="h3" size="lg">Questions you may have</Heading>
              <Text className="my-2 italic" fontSize="2xl">Why is your portfolio the way it is?</Text>
              <Text className="" fontSize="2xl">In a past life, I was an avid swimmer, having done the sport for 14 years. In Mandarin, my name also contains the character for &quot;Ocean&quot; in it. With those combined, I&apos;m particularly fond of the ocean, and I wanted my portfolio to evoke the sense of calm from an ocean.</Text>

              
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </div>
  )
}
