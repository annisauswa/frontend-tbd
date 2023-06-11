import { useState, useEffect } from "react";
import Link from "next/link";
import Edit from "../components/edit";
import SqlBuilder from "./sqlbuilder";
import Booktable from "./book";

// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:3001/api/book");
//   const data = await res.json();

//   return {
//     props: { book: data },
//   };
// };

export default function Home({book}) {
  var heading = ["id", "Title", "Author", "Publication Year", "Pages", "Price", "Publisher", "Last Update", "DML"];

  const [sql, isSql] = useState(false);

  const [books, setBooks] = useState([]);

  const getBook = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/book");
      const jsonData = await res.json();

      setBooks(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getBook();
  }, []);

  console.log(books);

    const deleteBook = async id => {
        try {
          const deleteBook = await fetch(`http://localhost:3001/book/${id}`, {
            method: "DELETE"
          });
    
          setBooks(books.filter(book => book.id !== id));
        } catch (err) {
          console.error(err.message);
        }
      };
    
  return (
    <div className="px-[200px] py-[50px] bg-white w-full min-h-screen">
      <h1 className=" text-black text-center font-extrabold text-3xl pb-[10px]">
        Good Reading Bookstore
      </h1>
      <div className="flex flex-col gap-[50px]">
        <div className="bg-red-400 rounded-[50px] w-full px-[100px] justify-around flex flex-row p-3">
            <button 
              className="hover:text-black focus:underline focus:text-black"
              onClick={() => isSql(false)}
            >
                BOOK
            </button>
            <button
              className="hover:text-black focus:underline focus:text-black"
              onClick={() => isSql(true)}
            >
                SQL BUILDER
            </button>
        </div>
        {sql ? (
          <SqlBuilder />
        ) : (
          <Booktable/>
        )}
      </div>
    </div>
  );
}