import React, { useEffect, useState } from 'react'
// CHAKRA UI
import { Box } from '@chakra-ui/react'
const PlayfulEyes = () => {
    const [rotate, setRotate] = useState(0)
    useEffect(
        () => {
            window.addEventListener('mousemove', (e) => {
                let mouseX = e.clientX
                let mouseY = e.clientY
                let deltaX = mouseX - window.innerWidth / 2
                let deltaY = mouseY - window.innerHeight / 2
                var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
                setRotate(angle-180)
            })
        }, []
    )
    return (
        <Box w={'100%'} h={'100vh'} display={'grid'} placeItems={'center'} bgColor={'#F6F6F6'} co >
            <Box boxSize={'90%'} display={'grid'} placeItems={'center'} background=
                'url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg) center/cover no-repeat' >
                <Box display={'flex'} overflowY={'hidden'} justifyContent={'center'} gap={10} alignItems={'center'} width={'50%'} height={'50%'} color={'black'}>

                    <Box display={'grid'} placeItems={'center'} boxSize={'250'} bg={'white'} borderRadius={'50%'} >
                        <Box boxSize={125} display={'grid'} placeItems={'center'} borderRadius={'50%'} bg={'black'} overflow={'hidden'}  >
                            <Box w={'100%'} transform={`rotate(${rotate}deg)`} >
                                <Box bg={'white'} boxSize={5} borderRadius={'50%'} />
                            </Box>
                        </Box>
                    </Box>

                    <Box display={'grid'} placeItems={'center'} bg={'white'} boxSize={'250'} borderRadius={'50%'} >
                        <Box minW={125} minH={125} display={'grid'} placeItems={'center'} borderRadius={'50%'} overflow={'hidden'} bg={'black'}  >
                            <Box transform={`rotate(${rotate}deg)`} w={'100%'} >
                                <Box bg={'white'} boxSize={5} borderRadius={'50%'} />
                            </Box>
                        </Box>
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default PlayfulEyes