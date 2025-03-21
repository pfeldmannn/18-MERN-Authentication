const typeDefs = `
  type Query {
    me: User
  };

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookAuthor: Array!, description: String!, title: String!, bookId: Int!, image: String!, link: String!): User
    romoveBook(bookId: Int!): User
  };

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  };

  type Book {
    bookId: Int
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }
    


`;

export default typeDefs;
