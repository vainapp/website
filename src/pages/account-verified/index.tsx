import {
  Box,
  Text,
  Heading,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FullPageContainer } from "../../components/FullPageContainer";
import { SEO } from "../../components/SEO";

export default function AccountVerified() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <SEO title="Conta verificada - Grupo C" />

      <FullPageContainer>
        <Box maxWidth="600px" as="section">
          <Text fontSize="1.5rem" fontWeight="bold" as="span">
            👏 Bem-vindo(a)!
          </Text>

          <Heading
            as="h1"
            fontSize={["3rem", "4.5rem"]}
            lineHeight={["3rem", "4.5rem"]}
            fontWeight="900"
            mt={["1rem", "1.5rem"]}
          >
            Sua conta está{" "}
            <Text color="brand.feedback.success" as="span">
              verificada
            </Text>
            !
          </Heading>

          <Text
            fontSize={["1rem", "1.5rem"]}
            lineHeight={["1rem", "1.5rem"]}
            mt={["1rem", "1.5rem"]}
          >
            Você já pode fechar esta janela e seguir pelo aplicativo
          </Text>
        </Box>

        {isWideVersion && (
          <Image src="/images/success.svg" alt="Account verified" boxSize="400px" />
        )}
      </FullPageContainer>
    </>
  );
}
