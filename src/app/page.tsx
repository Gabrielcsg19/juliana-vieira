import Image from 'next/image';
import { Box, Center, HStack, Text, VStack } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';

import LogoSvg from '@/assets/images/logo.svg';
import WhatsappSvg from '@/assets/images/whatsapp.svg';
import EmailSvg from '@/assets/images/e-mail.svg';
import InstagramSvg from '@/assets/images/instagram.svg';
import LinkedinSvg from '@/assets/images/linkedIn.svg';
import PhotoHomePng from '@/assets/images/photo-home.svg';

export default function Home() {
  return (
    <VStack as="main">
      <VStack
        as="section"
        align="stretch"
        pt={14}
        height="100vh"
        position="relative"
        justify="space-between"
      >
        <VStack mb={8}>
          <Image src={LogoSvg} alt="Logo Juliana Vieira" />
          <Text
            fontWeight="bold"
            fontSize={42}
            lineHeight="none"
            mt={7}
            as="h1"
          >
            Juliana Vieira
          </Text>
          <Text
            fontStyle="italic"
            fontWeight="light"
            fontSize={22}
            lineHeight="none"
            as="h2"
          >
            Perita Judicial Trabalhista
          </Text>
        </VStack>
        <Center>
          <Image src={PhotoHomePng} alt="Foto Juliana Vieira" />
        </Center>
        <HStack
          justify="space-between"
          position="absolute"
          bottom={20}
          as="nav"
          w="100%"
          zIndex={1}
        >
          <Link href="https://instagram.com" isExternal>
            <Image src={WhatsappSvg} alt="Ícone Whatsapp" />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <Image src={EmailSvg} alt="Ícone Email" />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <Image src={InstagramSvg} alt="Ícone Instagram" />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <Image src={LinkedinSvg} alt="Ícone Linkedin" />
          </Link>
        </HStack>
      </VStack>
      <Box
        height={300}
        width="100%"
        bottom={0}
        bgGradient="linear(to-t, rgba(0,0,0,0.9), transparent 80%)"
        position="absolute"
      />
    </VStack>
  );
}
