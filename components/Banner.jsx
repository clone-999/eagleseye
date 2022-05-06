import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Center,
  } from '@chakra-ui/react';
  import SearchFilters from './SearchFilters';
  
  export default function Banner() {
    return (
      <Flex
        w={'full'}
        h={'60vh'}
        backgroundImage={
          'url(https://img.freepik.com/free-photo/aerial-view-dubai-city-from-top-tower_268835-1059.jpg?w=1920&t=st=1651817841~exp=1651818441~hmac=81ffd6fa6d2d6a48ca05ef06ae00ef6a569625db9abccede8cb1e2f27c8bad3b)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'6xl'} align={'flex-center'} spacing={6}>
            <Center>
              <Text
                color={'white'}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
                Buy or Rent Your Dream Home!
              </Text>
            </Center>
            <Stack direction={'row'}>
              <SearchFilters />
              
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }