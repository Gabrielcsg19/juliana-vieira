import { Box, Center, Container, Text, VStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';

import PhotoAboutSvg from '@/assets/images/photo-about.svg';

export function AboutSection() {
  return (
    <VStack as="section" align="start" pt={10}>
      <Container px={6}>
        <Text as="h1" fontWeight="bold" fontSize="4xl" lineHeight="none">
          Sobre Mim
        </Text>
        <Box h="2px" mt={4} mb={10} bgColor="purple.400" w="60px" />
        <Text as="p" lineHeight="tall" mb={3.5} fontSize="lg">
          Juliana Vieira, 32 anos, contadora graduada em Ciências Contábeis pela
          Universidade do Sul de Santa Catarina desde 2014 e acumula mais de 10
          anos de experiência em departamentos pessoal e contábil. Especializada
          em Cálculos Trabalhistas, possui foco em perícia judicial trabalhista
          e assistência técnica.
        </Text>
        <Text as="p" lineHeight="tall" fontSize="lg" mb={8}>
          Possui uma paixão genuína pelo mundo dos cálculos e é comprometida em
          estar constantemente atualizada a fim de manter a excelência em seus
          serviços oferecidos. Sua dedicação reflete-se na eficiência e
          seriedade que a profissão exige.
        </Text>
        <Center>
          <Image src={PhotoAboutSvg} alt="Foto Juliana Vieira" />
        </Center>
      </Container>
    </VStack>
  );
}
