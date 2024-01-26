import Domain from "../models";

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const resolvers = {
  Query: {
    books: async () => {
      const domains = await Domain.findAll();
      console.log(domains);
      return books;
    },
  },
};

export default resolvers;
