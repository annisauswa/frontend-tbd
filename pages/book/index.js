// import Link from "next/link";

// export const getStaticProps = async () => {
//     const res = await fetch("http://localhost:3001/api/book");
//     const data = await res.json();

//     return {
//       props: { book: data },
//     };
//   };

// export default function Book({ book }) {
//     var heading = ["id", "Title", "Author", "Publication Year", "Pages", "Price", "Publisher", "Last Update", "DML"];

    // const [books, setBooks] = useState([]);

    // const deleteTodo = async id => {
    //     try {
    //       const deleteTodo = await fetch(`http://localhost:3001/books/${id}`, {
    //         method: "DELETE"
    //       });
    
    //       setBooks(Books.filter(book => book.id !== id));
    //     } catch (err) {
    //       console.error(err.message);
    //     }
    //   };

//     return(
//         <div className="px-[200px] bg-white w-full min-h-screen">
//         <h1 className=" text-black text-center">
//           Good Reading Bookstore
//         </h1>
//         <div className="flex flex-col gap-[50px]">
//           <div className="bg-red-400 rounded-[50px] w-full px-[100px] justify-around flex flex-row">
//             <Link href="/book">
//               <button className="hover:text-black focus:underline focus:text-black">BOOK</button>
//             </Link>
//             <Link href="/sqlbuilder">
//               <div>SQL BUILDER</div>
//             </Link>
//           </div>
//           <div className="overflow-x-auto">
//             <table class="table w-full table-pin-rows table-pin-cols text-black">
//                 <thead>
//                 <tr>
//                     {heading.map((head) => (
//                     <th key={head}>{head}</th>
//                     ))}
//                 </tr>
//                 </thead>
//                 <tbody className="">
//                 {book.map((item) => (
//                     <tr key={item.id}>
//                     <td>{item.id}</td>
//                     <td>{item.title}</td>
//                     <td>{item.auth_id}</td>
//                     <td>{item.publication_year}</td>
//                     <td>{item.pages}</td>
//                     <td>{item.price}</td>
//                     <td>{item.pub_id}</td>
//                     <td>{item.last_update}</td>
//                     <td>
//                          <button className="btn btn-primary">Edit
//                          </button>
//                         <button
//                             className="btn btn-danger"
//                             onClick={() => deleteTodo(book.id)}>Delete
//                         </button>
//                     </td>
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>
//         </div>
//         </div>
//       </div>
        
//     )
// }