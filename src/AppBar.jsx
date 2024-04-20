import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import Logo from '../public/TRUEPICAI.png'
const AppBar = () => {
    const links = ['services', 'our work', 'about us', 'insights']
    return (
        <Box pos="fixed" w="100%" zIndex={200} py={'1vw'} px={'3.91vw'} bgColor={'black'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} >
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} w={'80%'} >
                <Box>
                    <Image
                    // boxSize={'7vw'}
                        width="12vw" height="4.7vw"
                        // boxSize='100px'
                        objectFit='cover'
                        src={Logo}
                        alt='Dan Abramov'
                    />
                </Box>
                <Box display={'flex'} w={'50%'} justifyContent={'space-evenly'} >
                    {
                        links.map(
                            (link, idx) => {
                                return <a className='links1' style={{ textTransform: 'capitalize' }} > {link} </a>
                            }
                        )
                    }
                </Box>
            </Box>
            <Box>
                <a className='links1' >Contact Us</a>
            </Box>
        </Box>
        // <div>AppBar</div>
    )
}

export default AppBar
// WHY ISNT IT PRINTING THE LINKS