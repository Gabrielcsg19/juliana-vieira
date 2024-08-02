import Image from 'next/image';
import { Box, Center, Container, HStack, Text, VStack } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';

import LogoSvg from '@/assets/images/logo.svg';
import WhatsappSvg from '@/assets/images/whatsapp.svg';
import EmailSvg from '@/assets/images/e-mail.svg';
import InstagramSvg from '@/assets/images/instagram.svg';
import LinkedinSvg from '@/assets/images/linkedIn.svg';
import PhotoHomePng from '@/assets/images/photo-home.svg';

export function HomeSection() {
  return (
    <VStack as="section" pos="relative">
      <Container pos="relative" px={6}>
        <VStack align="stretch" pt={14} height="100vh" justify="space-between">
          <VStack mb={8}>
            <Image src={LogoSvg} alt="Logo Juliana Vieira" />
            <Text
              fontWeight="bold"
              fontSize={48}
              lineHeight="none"
              mt={12}
              as="h1"
            >
              Juliana Vieira
            </Text>
            <Text
              fontStyle="italic"
              fontWeight="light"
              fontSize={24}
              lineHeight="none"
              as="h2"
            >
              Perita Judicial Trabalhista
            </Text>
          </VStack>
          <Center>
            <Image
              style={{ height: '60vh' }}
              src={PhotoHomePng}
              alt="Foto Juliana Vieira"
            />
          </Center>
        </VStack>
        <HStack
          justify="space-between"
          position="absolute"
          bottom={20}
          as="nav"
          left={6}
          right={6}
          zIndex={1}
        >
          <Link href="https://instagram.com" isExternal>
            <Image
              src={WhatsappSvg}
              alt="Ícone Whatsapp"
              style={{
                filter: 'drop-shadow(0 0 3px #0A0A0A)',
              }}
            />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <Image
              src={EmailSvg}
              alt="Ícone Email"
              style={{
                filter: 'drop-shadow(0 0 3px #0A0A0A)',
              }}
            />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <Image
              src={InstagramSvg}
              alt="Ícone Instagram"
              style={{
                filter: 'drop-shadow(0 0 3px #0A0A0A)',
              }}
            />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <Image
              src={LinkedinSvg}
              alt="Ícone Linkedin"
              style={{
                filter: 'drop-shadow(0 0 3px #0A0A0A)',
              }}
            />
          </Link>
        </HStack>
      </Container>
      <Box
        height={300}
        w="100vw"
        bottom={0}
        bgGradient="linear(to-t, #00000090, transparent 80%)"
        pos="absolute"
      />
    </VStack>
  );
}
