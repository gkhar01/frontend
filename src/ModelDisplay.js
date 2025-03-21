import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

const sides = ["Access", "Autonomy", "Communication", "Data", "Visual", "Models"];

const ModelDisplay = () => {
  const [index, setIndex] = useState(0);

  return (
    <Flex justify="center" align="center" height="100vh" bg="gray.800">
      <motion.div
        animate={{ rotateY: index * 60 }}
        transition={{ duration: 1 }}
        onClick={() => setIndex((prev) => (prev + 1) % sides.length)}
      >
        <Box
          w="200px"
          h="200px"
          bg="teal.500"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="md"
          boxShadow="xl"
        >
          <Text fontSize="xl" fontWeight="bold" color="white">
            {sides[index]}
          </Text>
        </Box>
      </motion.div>
    </Flex>
  );
}

export { ModelDisplay };
