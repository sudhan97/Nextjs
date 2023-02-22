import Carousel from '@/componenets/carousel'
import {Flex , Button, Heading,Image, Spacer, HStack,Card,CardBody} from '@chakra-ui/react'

import React from 'react'
import data from '../data/data.json'
import { useRouter } from 'next/router'
function home() {
  const route=useRouter()
  const goto=()=>{
    route.push('tractors')
  }
 
 
  return (
    <>
   
    <Flex p={6} boxShadow={'4xl'} justifyContent='center' alignItems='center' height='80px' width='100vw' bg='gray.100'>
        <Image  boxSize='70px' m='10px' marginTop='-7px' src='https://www.tractorjunction.com/assets/images/logo/TJ_LOGO_en.svg' alt='logo'></Image>
        {/* <Heading colorScheme='red' size='md' width='200px'>
            Tractor Junction
        </Heading> */}
        <Flex width='100vw'  alignItems='center'> 
            <Button>New tractors</Button>
            <Button>Buy used</Button>
            <Button>Sell used</Button>
            <Button>Farm euiqpments</Button>
            <Button>Compare</Button>
            <Button>On Road Price</Button>
            <Button>Loan</Button>
        </Flex>
       
        <HStack gap='10px' margin='10px'>
        <Button colorScheme='blue'>Sign up</Button>
        <Button colorScheme='green'>Log in</Button>

        </HStack>
       
    </Flex>
   <Carousel></Carousel>
    <Heading size='lg' m='40px'>New tractors</Heading>
    <Flex wrap='wrap' justifyContent='center' alignItems='center' gap='40px' m={7}>
      {
       
        data.slice(0,6).map((item,index)=>{
          return(
          <Card  size='xs'  key={index} boxShadow='2xl' background='gray.200'  >
          <CardBody  >
           
              <Image borderRadius='5px'  width='100%' src={item.image} alt={item.model} mb={4}></Image>
             
              <Heading textAlign='center' size='md' mb={4}>{item.model}</Heading>
              <Button  width='100%' colorScheme='red' background='#345772'>Get on Road Price</Button>

            
          </CardBody>
          </Card>)
        })
      }
      <Button background='#d85057' color='white' colorScheme='red' onClick={()=>goto()}>View all popular tractors</Button>
     </Flex>
    
    </>
  )
}

export default home