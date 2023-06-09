import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Center,
} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

export default function SimpleCard() {
  const navigate = useNavigate();

  const professorsHandler = () => {
    navigate('/professors');
  };

  return (
    <Flex
      minH={'85vh'}
      align={'flex-start'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={5} mx={'auto'} maxW={'lg'} py={6} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'3xl'}>Prijavi se</Heading>
          <Text fontSize={'md'} color={'gray.600'}>
            na platformi <Link color={'blue.400'}>ISEUS</Link> ✌️
          </Text>
        </Stack>
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <FormControl id='email'>
              <FormLabel>E-mail adresa</FormLabel>
              <Input type='email' />
            </FormControl>
            <FormControl id='password'>
              <FormLabel>Lozinka</FormLabel>
              <Input type='password' />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox>Zapamti me</Checkbox>
                <Link color={'blue.400'}>Zaboravljena šifra?</Link>
              </Stack>
              <Button
                onClick={professorsHandler}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Prijavi se
              </Button>
            </Stack>
          </Stack>
          <Stack spacing={2} mx={'auto'} maxW={'lg'} pt={5}>
            <Text align={'center'}>ili</Text>
            <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
              <Center>
                <Text>Google prijava</Text>
              </Center>
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
