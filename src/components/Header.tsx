import { Flex, Box, Heading, Spacer, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex as="header" h="5rem" borderBottom="1px" borderBottomColor="gray.100" justifyContent="center">
      <Flex width="1120px" alignItems="center" gap="2">
        <Image boxSize="3.5rem" src="/images/logo.png" alt="Grupo C" />
      </Flex>
    </Flex>
  );
}
