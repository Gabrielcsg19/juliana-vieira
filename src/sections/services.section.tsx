import Image from 'next/image';
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

export function ServiceSection() {
  return (
    <VStack as="section" align="start" py={10} bgColor="gray.800">
      <Container px={6}>
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
            pl={3.5}
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
            pl={3.5}
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
            pl={3.5}
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
            pl={3.5}
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
            pl={3.5}
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
          href="https://instagram.com"
          isExternal
          display="block"
        >
          <Button
            leftIcon={<Image src={WhatsappButtonSvg} alt="Seta para direita" />}
            fontWeight="bold"
            fontSize="sm"
            borderRadius="lg"
            h={50}
            bgColor="gray.900"
            _hover={{ bg: '#0A0A0A90' }}
            _active={{
              bg: 'gray.900',
            }}
            w="100%"
            color="purple.400"
            boxShadow="md"
          >
            SOLICITAR ORÇAMENTO
          </Button>
        </Link>
      </Container>
    </VStack>
  );
}
