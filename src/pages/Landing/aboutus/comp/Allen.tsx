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

const Allen = (props: Props) => {
  return (
    <>
      <Center py={6} padding={4}>
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
          <Flex flex={1} bg='blue.200'>
            <Image
              objectFit='cover'
              boxSize='100%'
              src={
                'https://media.licdn.com/dms/image/D4D03AQGaz-nKzwRDew/profile-displayphoto-shrink_800_800/0/1679084218889?e=2147483647&v=beta&t=EjZ5iFD40vsLYhEL9uKBBCcIsa3rJ2w3cCh7eu4my_I'
              }
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            p={1}
            pt={2}
          >
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              Allen Al-Shamali
            </Heading>
            <Text fontWeight={600} color={'gray.500'} size='sm' mb={4}>
              Student
            </Text>
            <Text textAlign={'center'} color={useColorModeValue('gray.700', 'gray.400')} px={3}>
              Software engineer student based on web development.
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
                _focus={{
                  bg: 'gray.200',
                }}
              >
                Github
              </Button>
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
        </Stack>
      </Center>
    </>
  );
};

export default Allen;
