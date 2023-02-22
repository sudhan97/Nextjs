import { Heading,Box,Text,Flex} from '@chakra-ui/react';
import React, { useEffect,useState} from 'react';
import { useGeolocated } from 'react-geolocated';

const Demo = () => {
  const [lat,setLat]=useState('')
  const [long,setLong]=useState('')
  const [data,setData]=useState('')
  const options2 = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0d32959bd7msh0ba3eb81b18531bp1ba3b0jsn122d88b0b4d4',
      'X-RapidAPI-Host': 'weather338.p.rapidapi.com'
    }
  };
 
  
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });
    useEffect((lat)=>{
      if(isGeolocationAvailable && isGeolocationEnabled &&  coords){
        setLat(coords.latitude)
        setLong(coords.longitude)
        fetch('https://www.weatherapi.com/docs/current.json')
        .then(res=>console.log(res))
        fetch(`https://weather338.p.rapidapi.com/weather/forecast?date=20200622&latitude=${lat}&longitude=${long}&language=en-US&units=m`, options2)
    .then(response => response.json())
    .then(response => {
      setData(
    <Box>
      <Flex>
      <Heading>Weather {`${response['v3-wx-observations-current'].temperature} \u00B0 C` }  {response['v3-wx-observations-current'].cloudCoverPhrase}</Heading>
      
      </Flex>
       
        <Text>{response['v3-location-point'].location.city}</Text>
    </Box>
      )
    },[lat])
   
    .catch(err => console.error(err));
      }
    })
   
    
    
  return (
    <>
    
    {data}
    </>
  )
};

export default Demo;
