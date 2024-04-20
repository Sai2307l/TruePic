import React, { useEffect, useRef } from 'react'
// CHAKRA UI
import { Box, Text } from '@chakra-ui/react'
// OTHERS
import gsap from 'gsap'

const Marquee = () => {
  const boxStyle = {
    borderTop: '1px solid white',
    borderBottom: '1px solid white',
    textTransform: 'uppercase',
    gap: 10,
    padding: 4,
    minWidth: '100%',
    maxHeight: 200,
    overflowY: 'hidden',
    alignItems: 'center',
    display: 'flex'
  }
  // Infinite Text Move on Scroll
  const firstText = useRef(null)
  const secondText = useRef(null)
  const thirdText=useRef(null)
  let xPercent = 0;
  let direction = -1;
  useEffect(
    () => {
      requestAnimationFrame(animation)
    }, []
  )
  const animation = () => {
    if(xPercent<=-100){
      xPercent=0
    }
    if(xPercent>0){
      xPercent=-100
    }
    gsap.set(firstText.current, { xPercent: xPercent })
    gsap.set(secondText.current, { xPercent: xPercent })
    gsap.set(thirdText.current, { xPercent: xPercent })

    xPercent += 0.15 * direction
    requestAnimationFrame(animation)
  }

  return (
    <Box borderBottom={'none'} border={'1px solid white'} p={8} bgColor={'#004D43'} borderTopRadius={'50'} className='marquee' >
      <div style={{
      borderTop: '1px solid white',
      borderBottom: '1px solid white',
      textTransform: 'uppercase',
      gap: 10,
      padding: 4,
      minWidth: '100%',
      maxHeight: 200,
      overflowY: 'hidden',
      alignItems: 'center',
      display: 'flex'
}} >

      <div ref={firstText} style={{fontSize:'250px',whiteSpace:'nowrap',overflowX:'visible'}}>
        we are ochi
      </div>
      <div ref={secondText} style={{fontSize:'250px',whiteSpace:'nowrap',overflowX:'visible'}}>
        we are ochi 
      </div>
      <div ref={thirdText} style={{fontSize:'250px',whiteSpace:'nowrap',overflowX:'visible'}}>
        we are ochi 
      </div>
    </div>
    </Box >
  )
}

export default Marquee
