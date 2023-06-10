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
import Allen from './comp/Allen';
import Denis from './comp/Denis';
import Body from './comp/Body';

export default function SocialProfileWithImageHorizontal() {
  return (
    <Stack justify={'center'} align={'center'}>
      <Heading fontSize={'3xl'} mt={'2rem'}>
        O nama
      </Heading>
      <Stack
        p={4}
        direction={{ base: 'column', md: 'column', lg: 'column', xl: 'row' }}
        justify={'center'}
      >
        <Allen />
        <Denis />
      </Stack>
      <Body />
    </Stack>
  );
}
