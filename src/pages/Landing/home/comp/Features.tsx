import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcAutomatic, FcDataSheet, FcBusinessman } from 'react-icons/fc';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack align={'center'}>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function Features() {
  return (
    <Box p={4} maxWidth={'80vw'} m={'5rem auto'}>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2, xl: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcAutomatic} w={10} h={10} />}
          title={'Automatizovana evidencija prisustva'}
          text={
            'ISEUS omogućava studentima da jednostavno skeniraju QR kod na vježbama i predavanjima kako bi brzo i efikasno evidentirali svoje prisustvo. Više nema potrebe za ručnim potpisivanjem, što čuva vrijeme i smanjuje administrativne zadatke.'
          }
        />
        <Feature
          icon={<Icon as={FcDataSheet} w={10} h={10} />}
          title={'Sveobuhvatne informacije o predmetima'}
          text={
            'ISEUS pruža studentima jedinstveno mjesto gdje mogu pristupiti svim relevantnim informacijama o predmetima na jednom mjestu. Bilo da je u pitanju raspored predavanja, materijali za učenje, ocjene ili obavijesti, sve je lako dostupno i organizirano.'
          }
        />
        <Feature
          icon={<Icon as={FcBusinessman} w={10} h={10} />}
          title={'Personalizovano iskustvo'}
          text={
            'ISEUS prilagođava se potrebama svakog pojedinačnog studenta. Studenti mogu kreirati svoje profile, postaviti preferencije i interese kako bi dobili relevantne informacije i obavijesti. Ovo personalizovano iskustvo olakšava praćenje akademskih obaveza i osigurava da studenti ostanu informisani.'
          }
        />
      </SimpleGrid>
    </Box>
  );
}
