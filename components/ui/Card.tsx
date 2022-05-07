// Sample card from Airbnb

import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Image } from "@chakra-ui/react";

function Card() {
  const article = {
    imageUrl: "https://tinyurl.com/43zpc85s",
    imageAlt: "A million lines of code written by a single person",
    duration: "10 Minutes",
    mode: "Read",
    title: "Learn JavaScript in 2022",
    author: "Nathan W.",
    reviewCount: 20,
    rating: 4,
  };

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" mb="4">
      <Image src={article.imageUrl} alt={article.imageAlt} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" bgColor="primary" color="secondary">
            JavaScript
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {article.duration} &bull; {article.mode}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="bold"
          as="h3"
          lineHeight="tight"
          isTruncated
          color="primary"
          fontSize="2xl"
        >
          {article.title}
        </Box>

        <Box>
          {article.author}
          <Box as="span" color="gray.600" fontSize="sm"></Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < article.rating ? "primary" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {article.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Card;
