import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Link, Button, Heading, Text, useColorModeValue, Center } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';

export default function SimpleCard() {
  return (
    <Flex minH={'100vh'} align={'flex-start'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Prijavi se</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
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
              <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                <Checkbox>Zapamti me</Checkbox>
                <Link color={'blue.400'}>Zaboravljena šifra?</Link>
              </Stack>
              <Button
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
