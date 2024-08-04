import { Image } from '@chakra-ui/next-js';
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';

import ArrowRightSvg from '@/assets/images/arrow-right.svg';
import WhatsappButtonSvg from '@/assets/images/whatsapp-button.svg';
import PhotoServicesSvg from '@/assets/images/photo-services.svg';

export function ServiceSection() {
  return (
    <VStack as="section" align="start" pt={10} bgColor="gray.800">
      <Container
        px={6}
        maxW={{
          base: 'container.sm',
          lg: 'container.lg',
          '2xl': 'container.xl',
        }}
      >
        <Flex justify="space-between" gap={24}>
          <Image
            src={PhotoServicesSvg}
            alt="Foto Juliana Vieira"
            display={{ base: 'none', lg: 'block' }}
            alignSelf="flex-end"
            maxH="570px"
          />
          <Box w="full" mb={10}>
            <Text as="h1" fontWeight="bold" fontSize="4xl" lineHeight="none">
              Serviços
            </Text>
            <Box h="2px" mt={4} mb={10} bgColor="purple.400" w="60px" />
            <VStack align="stretch" gap={4} mb={7}>
              <HStack
                bgColor="gray.700"
                pl={3.5}
                py={4}
                align="center"
                borderRadius="lg"
                boxShadow="md"
              >
                <Image src={ArrowRightSvg} alt="Seta para direita" width={18} />
                <Text fontWeight="bold" fontSize="sm">
                  CÁLCULOS DE PETIÇÃO INICIAL
                </Text>
              </HStack>
              <HStack
                bgColor="gray.700"
                px={3.5}
                py={4}
                align="center"
                borderRadius="lg"
                boxShadow="md"
              >
                <Image src={ArrowRightSvg} alt="Seta para direita" width={18} />
                <Text fontWeight="bold" fontSize="sm">
                  FASE DE CONHECIMENTO
                </Text>
              </HStack>
              <HStack
                bgColor="gray.700"
                px={3.5}
                py={4}
                align="center"
                borderRadius="lg"
                boxShadow="md"
              >
                <Image src={ArrowRightSvg} alt="Seta para direita" width={18} />
                <Text fontWeight="bold" fontSize="sm">
                  LIQUIDAÇÃO DE SENTENÇA
                </Text>
              </HStack>
              <HStack
                bgColor="gray.700"
                px={3.5}
                py={4}
                align="center"
                borderRadius="lg"
                boxShadow="md"
              >
                <Image src={ArrowRightSvg} alt="Seta para direita" width={18} />
                <Text fontWeight="bold" fontSize="sm">
                  LAUDOS PERICIAIS
                </Text>
              </HStack>
              <HStack
                bgColor="gray.700"
                px={3.5}
                py={4}
                align="center"
                borderRadius="lg"
                boxShadow="md"
              >
                <Image src={ArrowRightSvg} alt="Seta para direita" width={18} />
                <Text fontWeight="bold" fontSize="sm">
                  IMPUGNAÇÃO
                </Text>
              </HStack>
              <HStack
                bgColor="gray.700"
                px={3.5}
                py={4}
                align="center"
                borderRadius="lg"
                boxShadow="md"
              >
                <Image src={ArrowRightSvg} alt="Seta para direita" width={18} />
                <Text fontWeight="bold" fontSize="sm">
                  CALCULOS ELABORADOS NO PJE CALC
                </Text>
              </HStack>
            </VStack>
            <Link
              _hover={{ textDecoration: 'none' }}
              href="https://wa.me/5548999454784?text="
              isExternal
              display="block"
            >
              <Button
                leftIcon={
                  <Image src={WhatsappButtonSvg} alt="Ícone do Whatsapp" />
                }
                fontWeight="bold"
                fontSize="sm"
                borderRadius="lg"
                h={50}
                bgColor="gray.900"
                _hover={{ bg: '#0A0A0A90' }}
                _active={{
                  bg: 'gray.900',
                }}
                w="full"
                color="purple.400"
                boxShadow="md"
              >
                SOLICITAR ORÇAMENTO
              </Button>
            </Link>
          </Box>
        </Flex>
      </Container>
    </VStack>
  );
}
