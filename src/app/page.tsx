'use client';
import { Flex } from '@chakra-ui/react';

import { HomeSection } from '@/sections/home.section';
import { ServiceSection } from '@/sections/services.section';
import { AboutSection } from '@/sections/about.section';
import { ContactSection } from '@/sections/contact.section';

export default function Home() {
  return (
    <Flex as="main" direction="column">
      <HomeSection />
      <ServiceSection />
      <AboutSection />
      <ContactSection />
    </Flex>
  );
}
