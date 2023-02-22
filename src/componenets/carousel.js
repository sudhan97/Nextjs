import { useEffect, useState } from "react"
import { Box, Heading, Image, Select, Tab, TabList, TabPanel, TabPanels, Tabs, Button } from "@chakra-ui/react"

export default function Carousel() {
    const arr = ["https://www.tractorjunction.com/assets/images/upload-1583913356.jpg",
        "https://www.tractorjunction.com/assets/images/jcb/banner/jcb-banner-home-desktop-1920x600-en.jpg",
        "https://www.tractorjunction.com/assets/images/Newbanners/kubota-home-page-banner.jpg"]
    const [curr, setCurr] = useState(0)
    useEffect(() => {
        const set = setInterval(() => {
            if (curr === 2) {
                setCurr(0)

            }
            else {
                setCurr(curr + 1)
            }
            clearInterval(set)
        }, 2000)


    })
    return (

        <Box width='100vw'>

            <Image height='420px' width='100%' src={arr[curr]}></Image>
            <Box position='absolute' top='130px' rounded={6} boxShadow='2xl' left='50px' boxSize='xs' bg='white'>
                <Heading size='md' m="20px">
                    Find Your Right Tractors
                    <Tabs m='10px'>

                        <TabList>
                            <Tab>New Tractors</Tab>
                            <Tab>Used Tractors</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Select placeholder='Select Hp' mb={4}>
                                    <option value='upto 20Hp'>upto 20Hp</option>
                                    <option value='20-30HP'>20-30HP</option>
                                    <option value='40-50HP'>20-30HP</option>
                                    <option value='50-60HP'>20-30HP</option>
                                </Select>
                                <Select placeholder='Select Brand'>
                                    <option value='upto 20Hp'>Mahindra</option>
                                    <option value='20-30HP'>Swaraj</option>
                                    <option value='40-50HP'>Ashok Leyland</option>
                                    <option value='50-60HP'>Valdo</option>
                                </Select>
                            </TabPanel>
                            <TabPanel>
                                <Select placeholder='Select Hp' mb={4}>
                                    <option value='upto 20Hp'>upto 20Hp</option>
                                    <option value='20-30HP'>20-30HP</option>
                                    <option value='40-50HP'>20-30HP</option>
                                    <option value='50-60HP'>20-30HP</option>
                                </Select>
                                <Select placeholder='Select State'>
                                    <option >Delhi</option>
                                    <option >Mumbai</option>
                                    <option >Punjab</option>
                                    <option >Tamil Nadu</option>
                                    <option >Andhra pradesh</option>
                                    <option >Odissa</option>
                                    <option >Kerala</option>
                                </Select>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                    <Button width='100%' colorScheme='twitter'>Search Tractors</Button>
                </Heading>
            </Box>


        </Box>
    )
} 