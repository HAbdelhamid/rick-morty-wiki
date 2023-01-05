import { gql } from "@apollo/client";

const CHARACTER_QUERY = gql`
  query getCharacter($id: ID!){
    character(id: $id){
      id
      name
      status
      gender
      image
      species
      location{
        name
      }
      origin{
        name
      }
      episode{
        name
      }
    }
  }
`;

export default CHARACTER_QUERY ;