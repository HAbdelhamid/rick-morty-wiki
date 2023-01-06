import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
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
      <div className={styles.grid}>
        {characters.map((character, index: Key) => {
          return (
            <Link
              href={`/character/${character.id}`}
              key={index}
              className={styles.card}
            >
              <Image
                src={character.image}
                alt={character.name}
                width={260}
                height={260}
                priority
              />

              <h3>{character.name}</h3>
              {/* <p>Status: {character.status}</p>
              {character.type ? (
                <p>Type: {character.type}</p>
              ) : (
                <p>Type: No Type</p>
              )}
              <p>Species: {character.species}</p>
              <p>Gender: {character.gender}</p> */}
            </Link>
          );
        })}
      </div>
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

const Container = styled.div`
  display: grid;
  justify-content: center;
`;
