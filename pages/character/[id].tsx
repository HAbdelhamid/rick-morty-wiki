import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import CHARACTER_QUERY from "../../gql/queries/character";
import Image from "next/image";
import styled from "styled-components";

const Character = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, data, error } = useQuery(CHARACTER_QUERY, {
    variables: {
      id: id,
    },
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const {
    gender,
    name,
    species,
    status,
    image,
    alt,
    origin,
    episode,
    location,
  } = data.character;
  console.log(episode);
  return (
    <div>
      <Container>
        <Image
          src={image}
          width={350}
          height={350}
          alt="Character Picture"
        ></Image>

        <Box>
          <h1>ID: {id}</h1>
          <p>
            <strong>Character name: </strong>
            {name}
          </p>
          <p>
            <strong>Status: </strong>
            {status}
          </p>
          <p>
            <strong>Gender: </strong>
            {gender}
          </p>
          <p>
            <strong>Species: </strong>
            {species}
          </p>
          <p>
            <strong>Origin: </strong>
            {origin.name}
          </p>
          <p>
            <strong>Last location:</strong> {location.name}
          </p>
        </Box>
      </Container>
    </div>
  );
};

export default Character;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin: 6em auto;
`;

const Box = styled.div`
  background: #575d90;
  padding: 2em;
  border-radius: 16px;
`;
