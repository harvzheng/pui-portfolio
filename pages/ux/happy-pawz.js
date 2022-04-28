// This page is an example of a project page. Using components I made and from other
// React libraries, I constructed a responsive portfolio page.
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head'
import Menu from '../../components/menu'
import Blob from '../../components/blob'

import Nav from '../../components/nav'
import styles from '../../styles/Home.module.css'
import { Container, List } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Box, Text, OrderedList, UnorderedList, ListItem, Link} from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

export default function Home() {
  return (
    <div className={styles.container} height="100vh">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Container maxW='container.xl'>
        <Flex className="flex-col md:flex-row items-center md:items-start">
          <Flex direction="column">
            <Menu index={1}/>
          </Flex>
          <Flex grow={1} className={styles.mainContent} >
            <Flex className="flex flex-col lg:flex-row mb-4">
              <PhotoProvider className="px-4 my-4">
                <PhotoView src="/images/happy-pawz/1.png">
                  <div className="w-full lg:w-1/2 xl:w-2/3 gallery-image">
                    <img src="/images/happy-pawz/1.png" alt="" />
                  </div>
                </PhotoView>
              </PhotoProvider>
              <Box className="px-4 my-4 flex flex-col justify-end">
                <Heading as='h2' size='xl'>Happy Pawz</Heading>
                <Text className="my-2 italic" color="gray.300">
                  November - December 2021  
                </Text>
                <Text className="my-2 text-lg font-medium">
                  CMU Coursework - Interaction Design Studio
                </Text>
                <Text className="my-2 text-lg italic">
                  Project by Joanne Aire-Oaihimire, Angie Li, Sidra Manzoor, and Harvey Zheng
                </Text>
              </Box>
            </Flex>
            <Flex classNAme="my-4" direction="column">
              <Heading as='h2' size='lg'>
                Table of Contents
              </Heading>
              <UnorderedList>
                <ListItem>
                  <Link href="/ux/happy-pawz#overview">Overview</Link>
                </ListItem>
                <ListItem>
                  <Link href="/ux/happy-pawz#research">Rapid User Research</Link>
                </ListItem>
                <ListItem>
                  <Link href="/ux/happy-pawz#journey">Customer Journey Map</Link>
                </ListItem>
                <ListItem>
                  <Link href="/ux/happy-pawz#prototype">Prototyping</Link>
                </ListItem>
                <ListItem>
                  <Link href="/ux/happy-pawz#mobile">Mobile Hi-Fi Prototypes</Link>
                </ListItem>
                <ListItem>
                  <Link href="/ux/happy-pawz#desktop">Desktop Hi-Fi Prototypes</Link>
                </ListItem>
              </UnorderedList>
            </Flex>
            <Flex className="my-4" direction="column" id="overview">
              <Heading as='h2' size='lg'>
                Overview
              </Heading>
              <Text className="my-4">The overall goal of the project was to design a responsive website that solved some kind of a user need we uncovered through rapid user research. The area my team chose to focus on was in the pet adoption process.</Text>
              <Text className="my-4">We conducted 8 intercept interviews with people who had adopted pets, created journey maps from our interviews, and then found a user need in reducing competition for pets. From here, we created wireframes and paper prototypes.</Text>
              <Text className="my-4">After testing our paper prototypes on other classmates, we moved into creating medium fidelity prototypes. After a critique, we then created high-fidelity prototypes with animations.</Text>
            </Flex>
            <Flex className="my-4" direction="column" id="research">
              <Heading as='h2' size='lg'>
                Rapid User Research
              </Heading>
              <Text className="my-4">For our 8 interviews, we found people who had previously been involved in the pet adoption process, whether they are pet adopters, or they volunteer at a shelter. From this research, we uncovered a few key insights:.</Text>
              <OrderedList>
                <ListItem>Adoption process with strict requirements can be overwhelming</ListItem>
                <ListItem>Adoption process is low tech for payment and forms</ListItem>
                <ListItem>Some pets are more popular than others </ListItem>
              </OrderedList>
            </Flex>
            <Flex className="my-4" direction="column" id="journey">
              <Heading as='h2' size='lg'>
                Customer Journey Map
              </Heading>
              <Text className="my-4">After, we transformed our interviews into journey maps, and then combined them into a single customer journey map. From this journey map, we gained a better idea of the pain points someone experiences during the pet adoption process. We went through a round of critique on our combined journey map, and came out with a more refined journey map.</Text>
              <PhotoProvider className="px-4 my-4">
                <PhotoView src="/images/happy-pawz/2.png">
                  <div className="w-full gallery-image">
                    <img src="/images/happy-pawz/2.png" alt="" />
                  </div>
                </PhotoView>
              </PhotoProvider>
            </Flex>
            <Flex className="my-4" direction="column" id="prototype">
              <Heading as='h2' size='lg'>
                Prototyping
              </Heading>
              <Text className="my-4">After, we transformed our interviews into journey maps, and then combined them into a single customer journey map. From this journey map, we gained a better idea of the pain points someone experiences during the pet adoption process. We went through a round of critique on our combined journey map, and came out with a more refined journey map.</Text>
              <Flex>
                <PhotoProvider className="px-4 my-4 flex">
                  <PhotoView src="/images/happy-pawz/3.png">
                    <div className="w-1/4 gallery-image">
                      <img src="/images/happy-pawz/3.png" alt="" />
                    </div>
                  </PhotoView>
                  <PhotoView src="/images/happy-pawz/4.png">
                    <div className="w-1/4 gallery-image">
                      <img src="/images/happy-pawz/4.png" alt="" />
                    </div>
                  </PhotoView>
                  <PhotoView src="/images/happy-pawz/5.png">
                    <div className="w-1/2 gallery-image">
                      <img src="/images/happy-pawz/5.png" alt="" />
                    </div>
                  </PhotoView>
                </PhotoProvider>
              </Flex>
              <Text className="my-4">
              After testing our paper prototypes, we moved into Figma to create mid-fi, and then hi-fi prototypes after a round of critique. 
              </Text>
            </Flex>
            <Flex className="my-4" direction="column" id="mobile">
              <Heading as='h2' size='lg' className='mb-4'>
                Mobile Hi-Fi Pages
              </Heading>
              <Flex>
                <PhotoProvider className="px-4 my-4 flex">
                  <PhotoView src="/images/happy-pawz/mobile-1.png">
                    <div className="w-1/4 gallery-image">
                      <img src="/images/happy-pawz/mobile-1.png" alt="" />
                    </div>
                  </PhotoView>
                  <PhotoView src="/images/happy-pawz/mobile-2.png">
                    <div className="w-1/4 gallery-image">
                      <img src="/images/happy-pawz/mobile-2.png" alt="" />
                    </div>
                  </PhotoView>
                  <PhotoView src="/images/happy-pawz/mobile-3.png">
                    <div className="w-1/4 gallery-image">
                      <img src="/images/happy-pawz/mobile-3.png" alt="" />
                    </div>
                  </PhotoView>
                  <PhotoView src="/images/happy-pawz/mobile-4.png">
                    <div className="w-1/4 gallery-image">
                      <img src="/images/happy-pawz/mobile-4.png" alt="" />
                    </div>
                  </PhotoView>
                </PhotoProvider>
              </Flex>
            </Flex>
            <Flex className="my-4" direction="column" id="desktop">
              <Heading as='h2' size='lg' className='mb-4'>
                Desktop Hi-Fi Pages
              </Heading>
              <Flex>
                <PhotoProvider className="px-4 my-4 flex">
                  <PhotoView src="/images/happy-pawz/desktop-1.png">
                    <div className="w-1/3 gallery-image">
                      <img src="/images/happy-pawz/desktop-1.png" alt="" />
                    </div>
                  </PhotoView>
                  <PhotoView src="/images/happy-pawz/desktop-2.png">
                    <div className="w-1/3 gallery-image">
                      <img src="/images/happy-pawz/desktop-2.png" alt="" />
                    </div>
                  </PhotoView>
                  <PhotoView src="/images/happy-pawz/desktop-3.png">
                    <div className="w-1/3 gallery-image">
                      <img src="/images/happy-pawz/desktop-3.png" alt="" />
                    </div>
                  </PhotoView>
                </PhotoProvider>
              </Flex>
              <Flex>
                <PhotoProvider className="px-4 my-4 flex">
                  <PhotoView src="/images/happy-pawz/desktop-4.png">
                    <div className="w-1/2 gallery-image">
                      <img src="/images/happy-pawz/desktop-4.png" alt="" />
                    </div>
                  </PhotoView>
                  <PhotoView src="/images/happy-pawz/desktop-5.png">
                    <div className="w-1/2 gallery-image">
                      <img src="/images/happy-pawz/desktop-5.png" alt="" />
                    </div>
                  </PhotoView>
                </PhotoProvider>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Container>

      
    </div>
  )
}
