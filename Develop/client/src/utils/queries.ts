import { gql } from "@apollo/client";

export const GET_ME = gql`
query Me($meId: ID, $username: String) {
  me(id: $meId, username: $username) {
    _id
    bookCount
    email
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
    username
  }
}
`;


