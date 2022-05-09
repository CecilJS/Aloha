import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Image } from "@chakra-ui/react";
import { Article } from "../interfaces/interfaces";

function Card(props: Article) {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" mb="4">
      <Image src={props.imageUrl} alt={props.imageAlt} />

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
            {props.duration} &bull; {props.mode}
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
          {props.title}
        </Box>

        <Box>
          {props.author}
          <Box as="span" color="gray.600" fontSize="sm"></Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < props.rating ? "primary" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {props.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Card;
