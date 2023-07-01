import { Box, Grid, HStack, Image, Text, VStack } from "@chakra-ui/react"
import { FaStar } from "react-icons/fa"

export default function Home(){
  return( 
  <Grid mt={10} px={40} columnGap={4} rowGap={8} templateColumns={"repeat(5, 1fr)"} >
    <VStack alignItems={"flex-start"}>
      <Box overflow={"hidden"} mb={3} rounded={"3xl"}>
        <Image src="https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/46c0c87f-d9bc-443c-9b64-24d9e594b54c.jpeg?im_w=720" />     
      </Box>
      <Box>
        <Grid gap={2} templateColumns={"6fr 1fr"}>
          <Text as={"b"} noOfLines={1} fontSize={"md"}>
            발렌시아(Valencia), 스페인
          </Text>  
          <HStack spacing={1}>
            <FaStar size={15}/>
            <Text>
              5.0
            </Text>
          </HStack>
        </Grid>
      <Text fontSize={"sm"} color={"gray.600"}>
        발렌시아(Valencia), 스페인
      </Text>
      </Box>
      <Text fontSize={"sm"} color={"gray.600"}>
        <Text as={"b"}>$72</Text> -/ night
      </Text>
    </VStack>
  </Grid>)
}