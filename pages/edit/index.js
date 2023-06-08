import { useState } from 'react'
import Link from 'next/link'

const edit = ({todo}) => {
    const [description, setDescription] = useState(todo.description);
    const updateDescription = async e => {
        e.preventDefault();
        try {
          const body = { description };
          const response = await fetch(
            `http://localhost:3001/book/${book.id}`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body)
            }
          );
    
          window.location = "/";
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
                <Link href="/book">
                <button className="hover:text-black focus:underline focus:text-black">BOOK</button>
                </Link>
                <Link href="/sqlbuilder">
                <div>SQL BUILDER</div>
                </Link>
            </div>
            
            <h1 className='text-black'>Update Data Book</h1>
            <form>
            {/* id, title, auth_id, publication_year, pages, price, pub_id, last_update */}
                <input  type="text" placeholder="Title" className="input-md w-full rounded-lg"/>
                <input  type="text" placeholder="Author ID" className="input-md w-full rounded-lg"/>
                <input  type="text" placeholder="Publication Year" className="input-md w-full rounded-lg"/>
                <input  type="text" placeholder="Pages" className="input-md w-full rounded-lg"/>
                <input  type="text" placeholder="Price" className="input-md w-full rounded-lg"/>
                <input  type="text" placeholder="Publication ID" className="input-md w-full rounded-lg"/>
            </form>
            <button type="button"
                class="btn btn-warning w-fit"
                data-dismiss="modal"
                onClick={e => updateDescription(e)}>Update</button>
            <Link href='/'>
                <button className="btn btn-primary">Cancel</button>
            </Link>
        </div>
    </div>
  )
}

export default index