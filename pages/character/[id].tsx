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
        <div>
          <Image src={image} width={350} height={350} alt="Character Picture" />
          <Chip>
            <strong>{name}</strong>
          </Chip>
        </div>

        <Box>
          <h1>ID: {id}</h1>
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
          <p>
            <strong>Episodes:</strong>
            {episode.map((episode, index: key) => {
              return <span key={index}> {episode.name}, </span>;
            })}
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
  margin: 6em;
`;

const Box = styled.div`
  background: #575d90;
  padding: 2em;
  border-radius: 16px;
`;

const Chip = styled.h1`
  padding: 0.5em auto;
  margin: 0.5em auto;
  border-radius: 16px;
  text-align: center;
  background-image: url("https://i.pinimg.com/originals/c2/b4/cf/c2b4cfa2c85a298fe6a57d13f1b6ec74.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 400px 400px;
  text-shadow: 1px 1px 10px #000, 1px 1px 10px #000;
`;
