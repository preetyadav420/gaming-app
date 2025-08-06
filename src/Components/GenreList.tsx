import { HStack, Image, Link, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../Services/image-url";

const GenreList = (props: any) => {
  const { genres, isLoading, error } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return <p>Error loading genres</p>;

  return (
    <>
      <List.Root>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={9}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Link
                onClick={() => props.onSelect(genre)}
                variant="plain"
                fontSize="lg"
                fontWeight={
                  genre.id === props.selectedGenre?.id ? "bold" : "normal"
                }
              >
                {genre.name}
              </Link>
            </HStack>
          </ListItem>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
