import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Key } from "react";

type Character = {
  id: string;
  name: string;
  type: string;
  status: string;
  species: string;
  gender: string;
  image: string;
};
type Props = {
  loadMore(params: { page: number }): void;

  data: {
    characters: {
      info: {
        next: number;
      };
      results: Character[];
    };
  };
};

function Cards({ loadMore, data }: Props) {
  // const { loading, data, error } = useQuery(CHARACTERS_QUERY);
  // const router = useRouter();
  // const onClick = (characterId) => {
  //   router.push(`/character/${characterId}`);
  // };

  // console.log({ getData });
  const characters = data.characters.results;
  // const clickHandler = (id) => {
  //   return (e) => {
  //     router.push(`/character/${id}`);
  //   }
  // };
  console.log("characters", characters);
  console.log(data.characters.info.next);
  return (
    <Container>
      <Box>
        {characters.map((character, index: Key) => {
          return (
            <Link href={`/character/${character.id}`} key={index}>
              <StyeledImage
                src={character.image}
                alt={character.name}
                width={250}
                height={250}
                priority
              />

              <Chip>{character.name}</Chip>
            </Link>
          );
        })}
      </Box>
      <StyledButton
        onClick={() => {
          loadMore({ page: data.characters.info.next });
          // const fetch = await fetchMore({
          //   variables: {
          //     page: data.characters.info.next,
          //   },
          // });
        }}
      >
        Load more
      </StyledButton>
    </Container>
  );
}

export default Cards;

const StyledButton = styled.button`
  padding: 0.7em;
  margin: 1.5em auto;
  max-width: 200px;
  background: white;
  color: black;
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(20%, auto));
  grid-gap: 45px;
`;

const Chip = styled.h3`
  padding: 0.4em;
  margin: 0.4em auto;
  border-radius: 10px;
  text-align: center;
  max-width: 250px;
  max-height: 48.68px;
  overflow: hidden;
  text-overflow: ellipsis;
  background-image: url("portal.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 340px 200px;
  text-shadow: 1px 1px 10px #000, 1px 1px 10px #000;
`;

const Container = styled.div`
  display: grid;
`;

const StyeledImage = styled(Image)`
  border-radius: 16px;
`;
