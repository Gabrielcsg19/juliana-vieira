import { Box, Center, Container, Flex, Text, VStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';

import PhotoAboutSvg from '@/assets/images/photo-about.svg';

export function AboutSection() {
  return (
    <VStack as="section" align="start" pt={10}>
      <Container
        px={6}
        maxW={{
          base: 'container.sm',
          lg: 'container.lg',
          '2xl': 'container.xl',
        }}
      >
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align={{ base: 'center', lg: 'normal' }}
          gap={{ base: 8, lg: 0 }}
        >
          <Box flex={1} pb={{ base: 0, lg: 12 }}>
            <Text
              as="h1"
              fontWeight="bold"
              fontSize={{ base: '4xl', lg: '5xl' }}
              lineHeight="none"
            >
              Sobre Mim
            </Text>
            <Box h="2px" mt={4} mb={10} bgColor="purple.400" w="60px" />
            <Text
              as="p"
              lineHeight="tall"
              mb={3.5}
              fontSize={{ base: 'md', lg: 'lg' }}
            >
              Juliana Vieira, 32 anos, contadora graduada em Ciências Contábeis
              pela Universidade do Sul de Santa Catarina desde 2014 e acumula
              mais de 10 anos de experiência em departamentos pessoal e
              contábil. Especializada em Cálculos Trabalhistas, possui foco em
              perícia judicial trabalhista e assistência técnica.
            </Text>
            <Text as="p" lineHeight="tall" fontSize={{ base: 'md', lg: 'lg' }}>
              Possui uma paixão genuína pelo mundo dos cálculos e é comprometida
              em estar constantemente atualizada a fim de manter a excelência em
              seus serviços oferecidos. Sua dedicação reflete-se na eficiência e
              seriedade que a profissão exige.
            </Text>
          </Box>
          <Flex flex={1} justify="flex-end" align="flex-end">
            <Image src={PhotoAboutSvg} alt="Foto Juliana Vieira" />
          </Flex>
        </Flex>
      </Container>
    </VStack>
  );
}
