import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import CHARACTER_QUERY from "../../gql/queries/character";
import Image from "next/image";
import styled from "styled-components";
import { type } from "os";

type character = {
  name: string;
};

type;

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
  console.log(data.character);
  return (
    <div>
      <Container>
        <div>
          <StyeledImage
            src={image}
            width={350}
            height={350}
            alt="Character Picture"
          />
          <Chip>
            <strong>{name}</strong>
          </Chip>
        </div>

        <Box>
          <h1>ID: {id}</h1>
          <ul>
            <li>
              <strong>Status: </strong>
              {status}
            </li>
            <li>
              <strong>Gender: </strong>
              {gender}
            </li>
            <li>
              <strong>Species: </strong>
              {species}
            </li>
            <li>
              <strong>Origin: </strong>
              {origin.name}
            </li>
            <li>
              <strong>Last location:</strong> {location.name}
            </li>
            <li>
              <strong>Episodes:</strong>
              {episode.map((episode: character, index: any) => {
                return <span key={index}> {episode.name}, </span>;
              })}
            </li>
          </ul>
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
  margin: 6em;
`;

const Box = styled.div`
  background: #575d90;
  padding: 2em;
  border-radius: 16px;
  li {
    list-style: inside;
  }
`;

const Chip = styled.h1`
  padding: 0.5em auto;
  margin: 0.5em auto;
  border-radius: 16px;
  text-align: center;
  background-image: url("/portal.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 400px 400px;
  text-shadow: 1px 1px 10px #000, 1px 1px 10px #000;
`;

const StyeledImage = styled(Image)`
  border-radius: 16px;
`;
