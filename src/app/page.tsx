import { Flex } from '@chakra-ui/react';

import { HomeSection } from '@/sections/home.section';
import { ServiceSection } from '@/sections/services.section';

export default function Home() {
  return (
    <Flex as="main" direction="column">
      <HomeSection />
      <ServiceSection />
    </Flex>
  );
}
