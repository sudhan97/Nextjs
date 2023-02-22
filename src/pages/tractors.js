import React from 'react'
import data from '../data/data.json'
import { Card,CardBody,Flex,Button,Image,Heading,Center,Box} from '@chakra-ui/react'
function Tractors() {
  return (
    <Box background='gray.200'>
    <Heading size='lg' textAlign='center' textTransform='uppercase'>Tractors</Heading>
    <hr></hr>
    <Flex wrap='wrap' justifyContent='center' alignItems='center' gap='40px' m={7}>
     
      {
       
        data.map((item,index)=>{
          return(
          <Card size='xs'  key={index} boxShadow='2xl' background='gray.100'  >
          <CardBody  >
           
              <Image borderRadius='5px'   src={item.image} alt={item.model} mb={4}></Image>
              <Box p={3}>

              <Heading textAlign='center' fontSize='18px' mb={4}>{item.model}</Heading>
              <Center>
              <Button size='md'  width='98%' colorScheme='red' background='#345772'>Get on Road Price</Button>

              </Center>
              </Box>

            
          </CardBody>
          </Card>)
        })
      }
     </Flex>
     </Box>
  )
}

export default Tractors