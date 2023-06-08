import { useState, useEffect } from "react";
import Link from "next/link";
import Edit from "../components/edit";

// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:3001/api/book");
//   const data = await res.json();

//   return {
//     props: { book: data },
//   };
// };

export default function Home({book}) {
  var heading = ["id", "Title", "Author", "Publication Year", "Pages", "Price", "Publisher", "Last Update", "DML"];

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
    <div className="px-[200px] bg-white w-full min-h-screen">
      <h1 className=" text-black text-center">
        Good Reading Bookstore
      </h1>
      <div className="flex flex-col gap-[50px]">
        <div className="bg-red-400 rounded-[50px] w-full px-[100px] justify-around flex flex-row">
          <Link href="/">
            <button className="hover:text-black focus:underline focus:text-black">BOOK</button>
          </Link>
          <Link href="/sqlbuilder">
            <div>SQL BUILDER</div>
          </Link>
        </div>
        <div className="overflow-x-auto">
            <table className="table w-full table-pin-rows table-pin-cols text-black">
                <thead>
                <tr>
                    {heading.map((head) => (
                    <th key={head}>{head}</th>
                    ))}
                </tr>
                </thead>
                <tbody className="">
                {books.map((item) => (
                    <tr key={item.id}>
                    <td>{item   .id}</td>
                    <td>{item.title}</td>
                    <td>{item.auth_id}</td>
                    <td>{item.publication_year}</td>
                    <td>{item.pages}</td>
                    <td>{item.price}</td>
                    <td>{item.pub_id}</td>
                    <td>{item.last_update}</td>
                    <td>
                        <Edit book={item} />
                        <button
                            className="btn btn-danger"
                            onClick={() => deleteBook(item.id)}>Delete
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}