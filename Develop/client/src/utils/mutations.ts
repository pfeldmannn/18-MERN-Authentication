import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
mutation Login($username: String, $email: String, $password: String) {
  login(username: $username, email: $email, password: $password) {
    token
    user {
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
}
`;

export const ADD_USER = gql`
mutation Mutation($username: String, $email: String, $password: String) {
  createUser(username: $username, email: $email, password: $password) {
    token
    user {
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
}
`;

export const SAVE_BOOK = gql`
mutation SaveBook($bookId: String, $authors: [String], $description: String, $image: String, $link: String, $title: String) {
  saveBook(bookId: $bookId, authors: $authors, description: $description, image: $image, link: $link, title: $title) {
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

export const REMOVE_BOOK = gql`
mutation DeleteBook($bookId: String) {
  deleteBook(bookId: $bookId) {
    _id
    username
    email
    bookCount
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
  }
}
`;
