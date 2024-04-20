import React from 'react'
// COMPONENTS
import AnimationTest from './AnimationTest'
import PlayfulEyes from './PlayfulEyes'
import About from './About'
import AppBar from './AppBar'
import Marquee from './Marquee'
import LandingPage from './LandingPage'
import UploadFiles from './UploadFiles'
// CHAKRA UI
import { Box } from '@chakra-ui/react'
const App = () => {
  return (
    <Box bgColor={'black'} minH={'100vh'} >
      {/* <AnimationTest/> */}
      <UploadFiles/>
      {/* <AppBar />
      <LandingPage/>
      <Marquee/>
      <About/>
      <PlayfulEyes/> */}
    </Box>
  )
}

export default App