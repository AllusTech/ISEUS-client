import React from 'react';
import BlogAuthor from './comp/Blog';
import LatestBlog from './comp/LatestBlog';
import { Divider, Heading, Stack } from '@chakra-ui/react';
import { Admin } from '../../../models/admin';

type Props = {};

const admin: Admin = {
  id: '0',
  firstName: 'Allen',
  lastName: 'Al-Shamali',
  profileImg: 'alsdjfalksdjaflk',
  email: 'allen@test.com',
};

const news = (props: Props) => {
  return (
    <>
      <Stack w={'90%'} mb={'3rem'} mt={'2rem'} align={'center'} mx={'auto'}>
        <Heading mx={'auto'} as='h1'>
          Novosti
        </Heading>
        <BlogAuthor
          tags={['prviTag', 'radi']}
          title='Prvi Blog post'
          text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium vero minus incidunt corporis, quo minima fugit suscipit iure atque voluptate sunt quos itaque inventore iste blanditiis architecto, ipsum esse dolor?'
          admin={admin}
        />
        <BlogAuthor
          tags={['drugiTag', 'IOvoRadi']}
          title='Drugi Blog post'
          text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium vero minus incidunt corporis, quo minima fugit suscipit iure atque voluptate sunt quos itaque inventore iste blanditiis architecto, ipsum esse dolor?'
          admin={admin}
        />

        {/* <Heading as='h2' marginTop='5'>
          Latest articles
        </Heading>
        <Divider marginTop='5' /> */}
      </Stack>

      {/* <Stack w={'80%'} m={'0 auto'} mb={'3rem'}>
        <LatestBlog />
      </Stack> */}
    </>
  );
};

export default news;
