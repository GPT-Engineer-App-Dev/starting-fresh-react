import { Container, Box, Heading } from "@chakra-ui/react";
import { SupabaseAuthUI } from "../integrations/supabase/auth.jsx";

const Login = () => {
  return (
    <Container centerContent>
      <Box p={4} maxW="md" w="full">
        <Heading as="h1" size="lg" mb={4}>Login</Heading>
        <SupabaseAuthUI />
      </Box>
    </Container>
  );
};

export default Login;