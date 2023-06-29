import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Edit from "../../components/edit";

const Booktable = () => {
    var heading = ["id", "Title", "Author", "Publication Year", "Pages", "Price", "Publisher", "Last Update", "DML"];
    const router = useRouter();
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
          const deleteBook = await fetch(`http://localhost:3001/api/book/${id}`, {
            method: "DELETE"
          });
    
          setBooks(books.filter(book => book.id !== id));
          router.refresh();
        } catch (err) {
          console.error(err.message);
        }
      };
  return (
    <div>
            <h1 className='text-black text-center font-bold text-xl'>DATA FROM BOOK TABLE</h1>
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
                            <Edit table={item} />
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
  )
}

export default Booktable