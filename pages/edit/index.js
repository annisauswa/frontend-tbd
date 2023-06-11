import { useState } from 'react'
import Link from 'next/link'

const Edit = ({ table }) => {
  const [title, setTitle] = useState(table.title);
  const [publication_year, setPublication_year] = useState(table.publication_year);
  const [pages, setPages] = useState(table.pages);
  const [price, setPrice] = useState(table.price);
  const [isUpdate, setIsUpdate] = useState(false);

    const updateTitle = async e => {
        e.preventDefault();
        setIsUpdate(true);
        // try {
          // const body = { title, publication_year, pages, price};
          const response = await fetch(
            `http://localhost:3001/book/${table.id}`,
            {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                title: title,
                publication_year: publication_year,
                pages: pages,
                price: price
              })
            }
          );
    
          setIsUpdate(false);
          Router.refresh();
      };

  return (
    <div className="px-[200px] bg-white w-full min-h-screen">
      <h1 className='text-black'>Update Data Book</h1>
      <form>
        {/* id, title, auth_id, publication_year, pages, price, pub_id, last_update */}
        <input type="text" placeholder="Title" className="input-md w-full rounded-lg" />
        {/* <input type="text" placeholder="Author ID" className="input-md w-full rounded-lg" /> */}
        <input type="text" placeholder="Publication Year" className="input-md w-full rounded-lg" />
        <input type="text" placeholder="Pages" className="input-md w-full rounded-lg" />
        <input type="text" placeholder="Price" className="input-md w-full rounded-lg" />
        {/* <input type="text" placeholder="Publication ID" className="input-md w-full rounded-lg" /> */}
      </form>
      <button type="button"
        class="btn btn-warning w-fit"
        data-dismiss="modal"
        onClick={e => updateDescription(e)}>Update</button>
      <Link href='/'>
        <button className="btn btn-primary">Cancel</button>
      </Link>
    </div>
  )
}

export default Edit