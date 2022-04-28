// This component creates the organic shapes, or the "blobs", and animates them.
// This also adds the header and description of a project.
// By using preset paths from SVGs, we can use the react-spring library to animate
// the morph from one svg path to another. In this case, the progress is tracked
// by a variable "x", which corresponds to a timer in other files.

import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { config, useSpring, animated } from 'react-spring'
import { Heading, Flex, Box, Spacer, Image, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types';
import Link from 'next/link'
import styles from '../styles/Home.module.css'


const blobPaths = [
  "M23.5,-28.7C29.6,-22.8,33.3,-14.7,35.5,-5.7C37.8,3.3,38.7,13,35.3,21.7C31.9,30.3,24.2,37.8,15.7,39.2C7.2,40.7,-2.1,36,-10.8,31.9C-19.5,27.7,-27.6,24.2,-32.2,17.8C-36.8,11.4,-37.9,2.3,-35.4,-5.3C-33,-12.9,-27,-19,-20.5,-24.8C-14,-30.6,-7,-36.3,0.8,-37.3C8.7,-38.3,17.3,-34.6,23.5,-28.7Z",
  "M22.4,-25.6C28.8,-21.3,33.6,-14.1,31.9,-8C30.2,-1.9,21.9,3,16.5,6.9C11.1,10.8,8.6,13.8,5.3,15.2C2,16.6,-2,16.6,-4.2,14.5C-6.5,12.4,-6.9,8.3,-9.3,5C-11.8,1.6,-16.2,-1,-18.7,-6.1C-21.2,-11.2,-21.7,-18.8,-18.2,-23.6C-14.8,-28.5,-7.4,-30.5,0.3,-30.9C8,-31.3,16,-29.9,22.4,-25.6Z",
  "M19.4,-26.7C26.9,-21.1,36.2,-18,38.3,-12.2C40.5,-6.5,35.5,1.7,32.8,10.9C30.2,20.1,29.8,30.2,24.7,35.7C19.6,41.2,9.8,41.9,3.1,37.6C-3.5,33.3,-7.1,24,-12.9,18.7C-18.7,13.5,-26.8,12.4,-30.3,8.3C-33.7,4.1,-32.6,-3,-30.8,-10.5C-29,-17.9,-26.6,-25.6,-21.4,-32C-16.1,-38.3,-8.1,-43.3,-1.1,-41.8C5.9,-40.3,11.8,-32.3,19.4,-26.7Z",
  "M25,-32.1C31.2,-29.8,34.2,-21,32.3,-13.6C30.4,-6.3,23.6,-0.4,21,6.6C18.4,13.6,20.1,21.8,17.3,29C14.5,36.2,7.3,42.4,-1.1,43.9C-9.4,45.4,-18.9,42.2,-25.2,36.1C-31.5,30.1,-34.7,21.2,-34.6,13.2C-34.5,5.2,-31.3,-2,-29.9,-10.8C-28.5,-19.5,-28.9,-30,-24.3,-32.7C-19.6,-35.4,-9.8,-30.4,-0.2,-30.1C9.4,-29.8,18.7,-34.3,25,-32.1Z"
]

function Morph({x, path1, path2}){
  return (
      <svg
        viewBox="0 0 90 90"
        height="auto"
        width="100%"
        id="sw-js-blob-svg"
        className={styles.organicimage}
      >
        <defs> 
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop id="stop1" stopColor="#52B788" offset="0%"></stop>
                <stop id="stop2" stopColor="#2F5A74" offset="100%"></stop>
            </linearGradient>
        </defs>
        <animated.path
          fill="url(#sw-gradient)"
          d={x.to({
            range: [0, 1],
            output: [
              blobPaths[path1],
              blobPaths[path2],
            ],
          })}
          width="100%" height="100%" transform="translate(45 45)" stroke-width="0"
        />
      </svg>
  );
}

function Blob({blobPath1, blobPath2, projectImage, link, projectName, projectDesc, reverse}) {
  const [active, setActive] = useState(false);
  const { x } = useSpring({ config: { duration: 800 }, x: active ? 1 : 0 });
  return(
    <Flex 
      className={`flex-col md:flex-row`}>
      <Box className={styles.organiccontainer}>
        <Morph x={x} path1={blobPath1} path2={blobPath2}/>
        <Link href={link}>
          {/* When a mouse hovers, 'x' is changed. When it leaves, 'x' resets.*/}
          <Image src="../images/thumbnail1.png" 
            className={styles.organicoverlay} 
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            />
        </Link>
      </Box>
      <Flex direction="column" justify={"center"} className={styles.projectCaption}>
        <Heading as='h2' size='xl'>
          {projectName}
        </Heading>
        <Text>
          {projectDesc}
        </Text>
      </Flex>
    </Flex>
  )
}

// This essentially sets required variables as inputs into the component.
Blob.propTypes = {
  projectImage: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  projectDesc: PropTypes.string.isRequired,
  reverse: PropTypes.bool.isRequired,
}
export default Blob;