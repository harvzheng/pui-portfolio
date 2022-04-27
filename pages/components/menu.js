import React, { Component } from 'react';
import { Flex, Spacer } from '@chakra-ui/react'
import PropTypes from 'prop-types';
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function NavItem({name, link}) {
  return(
    <Link href={link}>
      <Tab
      _selected={{ color: 'white', bg: 'blue.500' }}
      _hover={{
        background: "white",
        color: "gray.800"
      }}
      color="gray.100"
      >{name}</Tab>
    </Link>
  );
}

export default function Menu({index}) {
  return(
    <Flex className={styles.menuContainer}>
      <Tabs align='end' variant='soft-rounded' 
        defaultIndex={index}
        isFitted 
        colorScheme="gray"
        orientation="vertical"
        >
        <TabList>
          <NavItem 
            link="/"
            name="Home"
          />
          <NavItem 
            link="/ux"
            name="UX"
          />
          <NavItem 
            link="/development"
            name="Development"
          />
          <NavItem 
            link="/about"
            name="About"
          />
          <NavItem 
            link="https://drive.google.com/file/d/1k0_CFHj0QcoZldZg4p28qgCaMoaAgzbW/view?usp=sharing"
            name="Resume"
          />
        </TabList>
      </Tabs>
    </Flex>
  )
}

Menu.propTypes = {
  index: PropTypes.number.isRequired,
}