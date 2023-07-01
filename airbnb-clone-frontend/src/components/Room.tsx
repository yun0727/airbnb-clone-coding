import { Box, Button, Grid, HStack, Image, Text, VStack,  useColorModeValue } from "@chakra-ui/react";
import { FaRegHeart, FaStar } from "react-icons/fa";

export default function Room(){
  const gray = useColorModeValue("gray.600", "gray.300")
  return(
    <VStack alignItems={"flex-start"}>
      <Box position={"relative"} overflow={"hidden"} mb={3} rounded={"3xl"}>
        <Image minH={"280"} src="https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/46c0c87f-d9bc-443c-9b64-24d9e594b54c.jpeg?im_w=720" />   
        <Button variant={"unstyled"} position={"absolute"} top={0} right={0} color={"white"}>
          <FaRegHeart size={"20px"}/>    
        </Button>
      </Box>
      <Box>
        <Grid gap={2} templateColumns={"6fr 1fr"}>
          <Text as={"b"} noOfLines={1} fontSize={"md"}>
            발렌시아(Valencia), 스페인
          </Text>  
          <HStack _hover={{color:"red.100"}} spacing={1}>
            <FaStar size={15}/>
            <Text>
              5.0
            </Text>
          </HStack>
        </Grid>
      <Text fontSize={"sm"} color={gray}>
        발렌시아(Valencia), 스페인
      </Text>
      </Box>
      <Text fontSize={"sm"} color={gray}>
        <Text as={"b"}>$72</Text> -/ night
      </Text>
    </VStack>
  )
}