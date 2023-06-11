import { useState, SyntheticEvent } from "react";
import { useRouter } from "next/navigation";

const Edit = ({table}) => {
    // const [title, setTitle] = useState(book.title);
    // const updateTitle = async e => {
    //     e.preventDefault();
    //     try {
    //       const body = { title, auth_id, publication_year, pages, price, pub_id };
    //       const response = await fetch(
    //         `http://localhost:3001/book/${book.id}`,
    //         {
    //           method: "PUT",
    //           headers: { "Content-Type": "application/json" },
    //           body: JSON.stringify(body)
    //         }
    //       );
    
    //       window.location = "/";
    //     } catch (err) {
    //       console.error(err.message);
    //     }
    //   };

  const [title, setTitle] = useState(table.title);
  const [publication_year, setPublication_year] = useState(table.publication_year);
  const [pages, setPages] = useState(table.pages);
  const [price, setPrice] = useState(table.price);

  const [isUpdate, setIsUpdate] = useState(false);
  const [modal, setModal] = useState(false);

  const router = useRouter();

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
          console.log(body);
          setIsUpdate(false);
          router.refresh();
          setModal(false);
      }

      function handleChange(){
        setModal(!modal)
      }
    return (
      <div>
      <button className="btn btn-info btn-sm" onClick={handleChange}>
        Edit
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit {table.title}</h3>
          <form onSubmit={handleChange}>
            <div className="form-control">
              <label className="label font-bold">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Product Name"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Publication Year</label>
              <input
                type="text"
                value={publication_year}
                onChange={(e) => setPublication_year(e.target.value)}
                className="input w-full input-bordered"
                placeholder="publication_year"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Pages</label>
              <input
                type="text"
                value={pages}
                onChange={(e) => setPages(e.target.value)}
                className="input w-full input-bordered"
                placeholder="pages"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Price</label>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Price"
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>
                Close
              </button>
              {!isUpdate ? (
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              ) : (
                <button type="button" className="btn loading">
                  Updating...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Edit;