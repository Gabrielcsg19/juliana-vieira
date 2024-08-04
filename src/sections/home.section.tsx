import { Box, Container, HStack, Text, VStack, Link } from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';

import { customTheme } from '@/theme';
import LogoSvg from '@/assets/images/logo.svg';
import WhatsappSvg from '@/assets/images/whatsapp.svg';
import EmailSvg from '@/assets/images/e-mail.svg';
import InstagramSvg from '@/assets/images/instagram.svg';
import LinkedinSvg from '@/assets/images/linkedIn.svg';
import PhotoHomePng from '@/assets/images/photo-home.svg';
import LogoFullSvg from '@/assets/images/logo-full.svg';

export function HomeSection() {
  return (
    <VStack as="section" pos="relative">
      <Container
        pos="relative"
        px={6}
        maxW={{ base: 'container.sm', lg: 'container.xl' }}
      >
        <VStack
          align="stretch"
          pt={14}
          height="100vh"
          justify="space-between"
          flexDirection={{ base: 'column', lg: 'row' }}
          alignItems={{ base: 'center', lg: 'center' }}
        >
          <Image
            src={LogoFullSvg}
            alt="Logo completo Juliana Vieira"
            position="absolute"
            top={14}
            display={{ base: 'none', lg: 'block' }}
          />
          <VStack
            mb={{ base: 8, lg: 0 }}
            borderRight={{
              base: 'none',
              lg: `2px solid ${customTheme.colors.purple[400]}`,
            }}
            align={{ base: 'center', lg: 'baseline' }}
            padding={{ base: 0, lg: '12px 40px 12px 0px' }}
          >
            <Image
              src={LogoSvg}
              alt="Logo Juliana Vieira"
              display={{ base: 'block', lg: 'none' }}
            />
            <Text
              fontWeight="bold"
              fontSize={{ base: '42px', lg: '70px' }}
              lineHeight="none"
              mt={{ base: 6, lg: 0 }}
              as="h1"
            >
              Juliana Vieira
            </Text>
            <Text
              fontStyle="italic"
              fontWeight="light"
              fontSize={{ base: '22px', lg: '35px' }}
              lineHeight="none"
              as="h2"
            >
              Perita Judicial Trabalhista
            </Text>
          </VStack>
          <Image
            priority
            h={{ base: '65vh', lg: 'auto' }}
            alignSelf={{ base: 'auto', lg: 'flex-end' }}
            src={PhotoHomePng}
            alt="Foto Juliana Vieira"
          />
        </VStack>
        <HStack
          justify={{ base: 'space-between', lg: 'flex-start' }}
          position="absolute"
          as="nav"
          zIndex={1}
          bottom={20}
          left={6}
          right={6}
          gap={{ base: 2, lg: 6 }}
        >
          <Link href="https://wa.me/5548999454784?text=" isExternal>
            <Image
              src={WhatsappSvg}
              alt="Ícone Whatsapp"
              filter={`drop-shadow(0 0 3px ${customTheme.colors.gray[900]})`}
            />
          </Link>
          <Link href="mailto:peritajulianavieira@gmail.com" isExternal>
            <Image
              src={EmailSvg}
              alt="Ícone Email"
              filter={`drop-shadow(0 0 3px ${customTheme.colors.gray[900]})`}
            />
          </Link>
          <Link href="https://www.instagram.com/peritajulianavieira" isExternal>
            <Image
              src={InstagramSvg}
              alt="Ícone Instagram"
              filter={`drop-shadow(0 0 3px ${customTheme.colors.gray[900]})`}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/juliana-vieira-779621319"
            isExternal
          >
            <Image
              src={LinkedinSvg}
              alt="Ícone Linkedin"
              filter={`drop-shadow(0 0 3px ${customTheme.colors.gray[900]})`}
            />
          </Link>
        </HStack>
      </Container>
      <Box
        display={{ base: 'block', lg: 'none' }}
        height={300}
        w="100vw"
        bottom={0}
        bgGradient="linear(to-t, #00000090, transparent 80%)"
        pos="absolute"
      />
    </VStack>
  );
}
