import React from "react";
import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "./graphql/queries";

function App() {
  const { loading, data, error } = useQuery(GET_BOOKS);

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <ul>
      {data.books.map((book: any) => (
        <li key={book.title}>
          Title: {book.title}, Author: {book.author}
        </li>
      ))}
    </ul>
  );
}

export default App;
