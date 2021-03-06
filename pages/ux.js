// A page for the compilation of UX projects
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head'
import Menu from '../components/menu'

import Nav from '../components/nav'
import styles from '../styles/Home.module.css'
import Blob from '../components/blob'
import { Box, Container, Flex, Heading, } from '@chakra-ui/react'


export default function UX() {
  return (
    <div className={styles.container}>
      <Head>
        <title>UX Projects | Harvey Zheng</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <Container maxW='container.xl'>
          <Flex className='flex-col md:flex-row items-center md:items-start'>
            <Flex direction="column">
              <Menu index={1}/>
            </Flex>
            <Flex grow={1} direction="column" justify="center" className={styles.mainContent}>
              <Box marginBottom="60px">
                <Heading className="text-center md:text-left md:ml-4">UX Projects</Heading>
              </Box>
              <Blob
                blobPath1={0}
                blobPath2={1}
                projectImage="test.png"
                link="/ux/happy-pawz"
                projectName='Test Project'
                projectDesc='This is a brief description of the project. 
                In this section, we want to describe the benefits of the project, 
                how we did the project, and design decisions made throughout the project'
                reverse="row"
                />
              <Blob
                blobPath1={0}
                blobPath2={1}
                projectImage="test.png"
                link="/ux"
                projectName='Test Project'
                projectDesc='This is a brief description of the project. 
                In this section, we want to describe the benefits of the project, 
                how we did the project, and design decisions made throughout the project'
                reverse="row-reverse flex-row"
                />
              <Blob
                blobPath1={0}
                blobPath2={1}
                projectImage="test.png"
                link="/ux"
                projectName='Test Project'
                projectDesc='This is a brief description of the project. 
                In this section, we want to describe the benefits of the project, 
                how we did the project, and design decisions made throughout the project'
                reverse="row"
                />
            </Flex>
          </Flex>
        </Container>
      </main>
      
    </div>
  )
}
