import { Box, Heading, Stack, Text } from '@chakra-ui/react';

type Props = {};

const Body = (props: Props) => {
  return (
    <>
      <Stack align={'center'} maxWidth={'70vw'} pb={'2rem'}>
        <Heading fontSize={'3xl'} mt={'2rem'}>
          Kako je sve nastalo?
        </Heading>
        <Box pt={'2rem'} pb={'2rem'}>
          <Text>
            Dozvolite nam da vam predstavimo inspirativnu priču o nastanku našeg projekta, ISEUS-a -
            revolucionarne aplikacije koja je promijenila način evidencije prisustva na
            univerzitetima.
          </Text>
          <Text pt={'1rem'}>
            ISEUS je proizvod strasti, upornosti i kreativnosti jednog samofinancirajućeg studenta,
            Allena. Dok se suočavao s izazovima usklađivanja studija i posla, Allen je otkrio
            nedostatke tradicionalnog sistema evidencije prisustva na fakultetu. Njegova želja da
            pronađe efikasnije rješenje pokrenula je ideju koja je prerasla u revolucionarnu
            aplikaciju.
          </Text>
          <Text pt={'1rem'}>
            Iako je propuštao vježbe i predavanja zbog radnog rasporeda, Allen je svoje praktične
            testove položio izuzetno dobro, postigavši visok rezultat na završnom ispitu. Međutim,
            profesor mu nije dao potpis jer nije redovno prisustvovao nastavi. Ali umjesto da
            odustane, Allen je odlučio iskoristiti tu situaciju kao priliku za inovaciju.
          </Text>
          <Text pt={'1rem'}>
            Nakon razmjene emailova s profesorom Denisom Čekom, Allen je dobio priliku da razvije
            mali projekat koji bi pomogao u automatizaciji evidencije uspjeha studenata a za uzvrat
            će dobiti potpis iz predmeta. Taj mali projekat je kasnije evoluirao u ISEUS -
            jedinstvenu aplikaciju koja je transformisala način evidentiranja prisustva studenata na
            univerzitetima.
          </Text>
        </Box>
        <Heading fontSize={'3xl'} mt={'4rem'}>
          ISEUS
        </Heading>{' '}
        <Box>
          <Text pt={'1rem'}>
            ISEUS donosi moderno i efikasno rješenje za evidenciju prisustva na vježbama i
            predavanjima. Skeniranjem QR koda, studenti mogu brzo i jednostavno evidentirati svoje
            prisustvo, eliminirajući potrebu za ručnim potpisivanjem. Ali ISEUS nije samo o
            evidenciji prisustva. To je sveobuhvatna platforma koja omogućava studentima da pristupe
            svim relevantnim informacijama o predmetima na jednom mjestu. Raspored predavanja,
            materijali za učenje, ocjene i obavijesti - sve je organizirano i lako dostupno.
          </Text>
          <Text pt={'1rem'}>
            Naša misija je olakšati studentski život, povećati produktivnost i unaprijediti iskustvo
            na univerzitetu. ISEUS je rezultat strasti, inovacije i rada jednog studenta koji je
            pretvorio izazove u prilike. Pridružite se hiljadama studenata širom svijeta koji su već
            otkrili snagu ISEUS-a i iskusili modernu evoluciju evidencije prisustva i organizacije
            studija.
          </Text>
          <Text pt={'1rem'}>ISEUS - tvoj partner u uspjehu na univerzitetu!</Text>
        </Box>
      </Stack>
    </>
  );
};

export default Body;
