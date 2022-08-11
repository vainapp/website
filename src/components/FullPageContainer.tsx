import { ReactNode } from 'react'
import { Flex } from "@chakra-ui/react";

interface FullPageContainerProps {
    children: ReactNode;
}

export function FullPageContainer({ children }: FullPageContainerProps) {
  return (
    <Flex
      as="main"
      maxWidth="1120px"
      my="0"
      mx="auto"
      py="0"
      px="2rem"
      h="calc(100vh - 5rem)"
      align="center"
      justify="space-between"
    >
        {children}
    </Flex>
  );
}
