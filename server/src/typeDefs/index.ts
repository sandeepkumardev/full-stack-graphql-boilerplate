import { gql } from "apollo-server-express";

export default gql`
  type Book {
    title: String
    author: String
    price: Int!
  }

  type Query {
    books: [Book]
  }
`;
