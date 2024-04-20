import React from 'react'
// CHAKRA UI
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Text } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { motion } from 'framer-motion'
const LandingPage = () => {
    const landingPageFooter = ['For public and private companies', 'From the first pitch to IPO', 'START THE PROJECT']
    const pic = 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    return (
        <Box display={'flex'} flexDir={'column'}  >
            <Box overflow={'hidden'} className='landingPage' mt={'7.8125vw'} ml={'3.91vw'} fontSize={'10vw'}>
                <Box overflow={'hidden'} lineHeight={0.8}>
                    WE REVEAL
                </Box>
                <Box display={'flex'} alignItems={'center'} overflow={'hidden'} lineHeight={0.8}>

                    <motion.div
                        initial={{ width: 0}}
                        animate={{ width:'11.72vw',borderRadius: '0.79vw' }}
                        transition={{ duration: 0.75, type: 'spring', stiffness: 400 }}
                        style={{
                            backgroundImage: "url(https://images.unsplash.com/photo-1545231027-637d2f6210f8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            marginTop: 'auto',
                            width: '11.72vw', // Set the initial width explicitly
                            height: '7.04vw' // Set the height to match boxSize
                        }}
                    >
                    </motion.div>
                    AI GENERATED
                </Box>
                <Box overflow={'hidden'} lineHeight={0.8} >
                    ILLUSIONS
                </Box>
            </Box>
            <Box borderTopWidth={'1px'} px={'3.91vw'} pt={'1.18vw'} pb={'3.91vw'} mt={'6.18vw'} >
                <Box w={'100%'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}  >
                    {landingPageFooter.map(
                        (item, idx) => {
                            if (idx !== 2) {
                                return <p className='landingPageFooter' >{item}</p>
                            }
                            else {
                                return <Box display={'flex'} alignItems={'center'} >
                                    <Button borderRadius={'full'} >{item}</Button>
                                    <Box ml={'0.16vw'} display={'grid'} placeItems={'center'} border={'1px solid white'} borderRadius={'full'} boxSize={'10'} >
                                        <ExternalLinkIcon  />
                                    </Box>
                                </Box>
                            }
                        }
                    )
                    }
                </Box>

            </Box>
        </Box>
    )
}

export default LandingPage