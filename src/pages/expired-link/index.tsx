import {
    Box,
    Text,
    Heading,
    Image,
    useBreakpointValue,
  } from "@chakra-ui/react";
  import { FullPageContainer } from "../../components/FullPageContainer";
  import { SEO } from "../../components/SEO";
  
  export default function ExpiredLink() {
    const isWideVersion = useBreakpointValue({
      base: false,
      lg: true,
    });
  
    return (
      <>
        <SEO title="Link expirado - Grupo C" />
  
        <FullPageContainer>
          <Box maxWidth="600px" as="section">
            <Text fontSize="1.5rem" fontWeight="bold" as="span">
            ⚠️ Oops!
            </Text>
  
            <Heading
              as="h1"
              fontSize={["3rem", "4.5rem"]}
              lineHeight={["3rem", "4.5rem"]}
              fontWeight="900"
              mt={["1rem", "1.5rem"]}
            >
              Este link está{" "}
              <Text color="brand.feedback.error" as="span">
                expirado
              </Text>
              !
            </Heading>
  
            <Text
              fontSize={["1rem", "1.5rem"]}
              lineHeight={["1rem", "1.5rem"]}
              mt={["1rem", "1.5rem"]}
            >
              Você pode gerar um novo link solicitando a recuperação de sua senha
            </Text>
          </Box>
  
          {isWideVersion && (
            <Image src="/images/error.svg" alt="Expired link" boxSize="400px" />
          )}
        </FullPageContainer>
      </>
    );
  }
  