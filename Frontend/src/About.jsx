import React from 'react'
// CHAKRA UI
import { Box } from '@chakra-ui/react'
// OTHERS
import { motion } from 'framer-motion'
const About = () => {
    return (
        <Box bgColor={'#CDEA68'} color={'black'} pb={90} display={'flex'} flexDir={'column'} >
            <Box borderBottom={'1px solid rgba(0,0,0,0.5)'} >
                <Box fontSize={52} className='aboutPart1' display={'grid'} placeItems={'center'} px={50} pb={75} pt={50} >
                    <Box >
                        <Box color={'black'} overflowX={'visible'} overflowY={'hidden'}  >Ochi is a strategic partner for fast-grow­ing tech</Box>
                        <Box mt={'-25'} color={'black'} >businesses that need to raise funds, sell prod­ucts,</Box>
                        <Box mt={'-25'} color={'black'} > ex­plain com­plex ideas, and hire great peo­ple.</Box>
                    </Box>
                </Box>
            </Box>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'}  mb={90} >

                <Box w={'50%'} h={'35vh'} color={'black'}>What you can expect:</Box>
                <Box w={'30%'} h={'35vh'} display={'flex'} flexDir={'column'} justifyContent={'space-between'} >
                    <Box color={'black'} lineHeight={1.5}>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</Box>
                    <Box color={'black'} lineHeight={1.5}>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</Box>
                </Box>
                <Box w={'15%'} h={'35vh'} display={'flex'} alignItems={'flex-end'} justifyContent={'flex-end'} >
                    <Box h={'fit-content'} w={'fit-content'} >
                        <Box color={'black'}>Socials</Box>
                        <Box >
                            <Box color={'black'}>Instagram</Box>
                            <Box color={'black'}>Instagram</Box>
                            <Box color={'black'}>Instagram</Box>
                            <Box color={'black'}>Instagram</Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            {/* OUR APPROACH */}

            <Box borderTop={'1px solid rgba(0,0,0,0.5)'} h={'90vh'} display={'flex'} alignItems={'center'} justifyContent={'center'}  >
                <Box h={'90%'} display={'flex'} alignItems={'center'} justifyContent={'center'} w={'90%'} >

                    <Box w={'45%'} h={'95%'} p={0} overflow={'visible'} >
                        <Box color={'black'}  fontSize={52} >Our Approach:</Box>
                        <Box as={motion.button} whileHover={{scale:1.2}} transition={{duration:2.5,type:'spring',stiffness:500}} initial={{x:'-100%',opacity:0}} animate={{opacity:1,x:0}} textTransform={'uppercase'}  borderRadius={9999}  bg='black' overflow={'visible'} color='white' px={5} py={3}>
  Read More
</Box>
                    </Box>
                    <Box borderRadius={30} w={'45%'} h={'95%'} 
                        background=
                        'url(http://lnkiy.in/custom-team) center/cover no-repeat'
                    >

                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default About