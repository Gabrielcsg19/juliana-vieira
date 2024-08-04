import { Box, Center, Container, HStack, Text, VStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';

import WhatsappSvg from '@/assets/images/whatsapp.svg';
import EmailSvg from '@/assets/images/e-mail.svg';
import InstagramSvg from '@/assets/images/instagram.svg';
import LinkedinSvg from '@/assets/images/linkedIn.svg';
import LogoFullSvg from '@/assets/images/logo-full.svg';

export function ContactSection() {
  return (
    <>
      <VStack as="section" align="start" pt={10} bgColor="gray.800">
        <Container px={6}>
          <Text as="h1" fontWeight="bold" fontSize="4xl" lineHeight="none">
            Contato
          </Text>
          <Box h="2px" mt={4} mb={10} bgColor="purple.400" w="60px" />
          <VStack align="flex-start" gap={3}>
            <HStack>
              <Image
                src={WhatsappSvg}
                alt="Ícone Whatsapp"
                width={25}
                height={25}
              />
              <Text as="span">Whatsapp</Text>
              <Text as="span" fontSize={8} lineHeight="none">
                ●
              </Text>
              <Text as="span">(48) 9 9945-4784</Text>
            </HStack>
            <HStack>
              <Image src={EmailSvg} alt="Ícone E-mail" width={25} height={25} />
              <Text as="span">E-mail</Text>
              <Text as="span" fontSize={8}>
                ●
              </Text>
              <Text as="span">peritajulianavieira@gmail.com</Text>
            </HStack>
            <HStack>
              <Image
                src={InstagramSvg}
                alt="Ícone Instagram"
                width={25}
                height={25}
              />
              <Text as="span">Instagram</Text>
              <Text as="span" fontSize={8}>
                ●
              </Text>
              <Text as="span">@peritajulianavieira</Text>
            </HStack>
            <HStack>
              <Image
                src={LinkedinSvg}
                alt="Ícone LinkedIn"
                width={25}
                height={25}
              />
              <Text as="span">LinkedIn</Text>
              <Text as="span" fontSize={8}>
                ●
              </Text>
              <Text as="span">Juliana Vieira</Text>
            </HStack>
          </VStack>
          <Center mt={12} mb={10}>
            <Image src={LogoFullSvg} alt="Logo completo Juliana Vieira" />
          </Center>
        </Container>
      </VStack>
      <Box h="1px" bgColor="gray.700" />
      <Box bgColor="gray.800" as="footer" color="gray.400">
        <Container px={6} py={5}>
          <HStack justify="space-between">
            <Text>{new Date().getFullYear()}</Text>
            <Text as="span" fontSize={8}>
              ●
            </Text>
            <Text>JULIANA VIEIRA</Text>
            <Text as="span" fontSize={8}>
              ●
            </Text>
            <Text>CRC SC-040343/O-6</Text>
          </HStack>
        </Container>
      </Box>
    </>
  );
}
