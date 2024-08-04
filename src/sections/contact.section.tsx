import { Box, Container, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';

import WhatsappSvg from '@/assets/images/whatsapp.svg';
import EmailSvg from '@/assets/images/e-mail.svg';
import InstagramSvg from '@/assets/images/instagram.svg';
import LinkedinSvg from '@/assets/images/linkedIn.svg';
import LogoFullSvg from '@/assets/images/logo-full.svg';
import LogoFullLargeSvg from '@/assets/images/logo-full-large.svg';

export function ContactSection() {
  return (
    <>
      <VStack as="section" align="start" py={10} bgColor="gray.800">
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
            gap={{ base: 12, lg: 0 }}
            justify="space-between"
            align={{ base: 'normal', lg: 'center' }}
          >
            <Flex display={{ base: 'none', lg: 'block' }} maxW={80}>
              <Image
                src={LogoFullLargeSvg}
                alt="Logo completo grande Juliana Vieira"
              />
            </Flex>
            <Box>
              <Text
                as="h1"
                fontWeight="bold"
                fontSize={{ base: '4xl', lg: '5xl' }}
                lineHeight="none"
              >
                Contato
              </Text>
              <Box h="2px" mt={4} mb={10} bgColor="purple.400" w="60px" />
              <VStack align="flex-start" gap={3}>
                <HStack>
                  <Image
                    src={WhatsappSvg}
                    alt="Ícone Whatsapp"
                    w={{ base: 8, lg: 10 }}
                    h={{ base: 8, lg: 10 }}
                  />
                  <Text as="span" fontSize={{ base: 'md', lg: 'lg' }}>
                    Whatsapp
                  </Text>
                  <Text as="span" fontSize={8} lineHeight="none">
                    ●
                  </Text>
                  <Text as="span" fontSize={{ base: 'md', lg: 'lg' }}>
                    (48) 9 9945-4784
                  </Text>
                </HStack>
                <HStack>
                  <Image
                    src={EmailSvg}
                    alt="Ícone E-mail"
                    w={{ base: 8, lg: 10 }}
                    h={{ base: 8, lg: 10 }}
                  />
                  <Text as="span" fontSize={{ base: 'md', lg: 'lg' }}>
                    E-mail
                  </Text>
                  <Text as="span" fontSize={8}>
                    ●
                  </Text>
                  <Text as="span" fontSize={{ base: 'md', lg: 'lg' }}>
                    peritajulianavieira@gmail.com
                  </Text>
                </HStack>
                <HStack>
                  <Image
                    src={InstagramSvg}
                    alt="Ícone Instagram"
                    w={{ base: 8, lg: 10 }}
                    h={{ base: 8, lg: 10 }}
                  />
                  <Text as="span" fontSize={{ base: 'md', lg: 'lg' }}>
                    Instagram
                  </Text>
                  <Text as="span" fontSize={8}>
                    ●
                  </Text>
                  <Text as="span" fontSize={{ base: 'md', lg: 'lg' }}>
                    @peritajulianavieira
                  </Text>
                </HStack>
                <HStack>
                  <Image
                    src={LinkedinSvg}
                    alt="Ícone LinkedIn"
                    w={{ base: 8, lg: 10 }}
                    h={{ base: 8, lg: 10 }}
                  />
                  <Text as="span" fontSize={{ base: 'md', lg: 'lg' }}>
                    LinkedIn
                  </Text>
                  <Text as="span" fontSize={8}>
                    ●
                  </Text>
                  <Text as="span" fontSize={{ base: 'md', lg: 'lg' }}>
                    Juliana Vieira
                  </Text>
                </HStack>
              </VStack>
            </Box>
            <Image
              src={LogoFullSvg}
              alt="Logo completo Juliana Vieira"
              alignSelf="center"
              display={{ base: 'block', lg: 'none' }}
            />
          </Flex>
        </Container>
      </VStack>
      <Box h="1px" bgColor="gray.700" />
      <Box bgColor="gray.800" as="footer" color="gray.400">
        <Container px={6}>
          <HStack justify="space-between" py={5}>
            <Text fontSize={{ base: 'sm', lg: 'md' }}>
              {new Date().getFullYear()}
            </Text>
            <Text as="span" fontSize={8}>
              ●
            </Text>
            <Text fontSize={{ base: 'sm', lg: 'md' }}>JULIANA VIEIRA</Text>
            <Text as="span" fontSize={8}>
              ●
            </Text>
            <Text fontSize={{ base: 'sm', lg: 'md' }}>CRC SC-040343/O-6</Text>
          </HStack>
        </Container>
      </Box>
    </>
  );
}
