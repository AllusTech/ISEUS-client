import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

type Props = {};

const Denis = (props: Props) => {
  return (
    <>
      <Center py={6}>
        <Stack
          borderWidth='1px'
          borderRadius='lg'
          w={{ sm: '100%', md: '540px' }}
          height={{ sm: '60rem', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}
        >
          <Stack
            flex={1}
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            p={1}
            pt={2}
          >
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              Denis Čeke
            </Heading>
            <Text fontWeight={600} color={'gray.500'} size='sm' mb={4}>
              Doc. dr. sc.
            </Text>
            <Text textAlign={'center'} color={useColorModeValue('gray.700', 'gray.400')} px={3}>
              Software developer and teacher at Universities
            </Text>

            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'blue.500',
                }}
                _focus={{
                  bg: 'blue.500',
                }}
              >
                LinkedIn
              </Button>
            </Stack>
          </Stack>
          <Flex flex={1} bg='blue.200'>
            <Image
              objectFit='cover'
              boxSize='100%'
              src={
                'https://media.licdn.com/dms/image/C4E03AQHpvUxaKrP6jQ/profile-displayphoto-shrink_800_800/0/1653993791391?e=2147483647&v=beta&t=SRv0XSA2qufZEgASrqcja0kqfNv0QTnBeKxocg9rQ-8'
              }
            />
          </Flex>
        </Stack>
      </Center>
    </>
  );
};

export default Denis;
