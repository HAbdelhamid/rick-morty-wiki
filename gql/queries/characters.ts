import { gql } from "@apollo/client";

const CHARACTERS_QUERY = gql`
  query getCharacters($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info {
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        gender
        image
      }
    }
  }
`;

export default CHARACTERS_QUERY ;

