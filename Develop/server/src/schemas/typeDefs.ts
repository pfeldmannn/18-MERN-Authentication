const typeDefs = `

  type Book {
    bookId: String
    authors: [String]
    description: String
    image: String
    link: String
    title: String
  }


  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }


  type Auth {
    token: String
    user: User
  }

  
  type Query {
    me(id: ID, username: String): User
  }



  type Mutation {
    createUser(username: String, email: String, password: String): Auth
    login(username: String, email: String, password: String): Auth
    saveBook(bookId: String, authors: [String], description: String, image: String, link: String, title: String): User
    deleteBook(bookId: String): User
  }
`;

export default typeDefs;
