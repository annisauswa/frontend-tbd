import { useState } from "react";

const Edit = ({book}) => {
    const [title, setTitle] = useState(book.title);
    const updateTitle = async e => {
        e.preventDefault();
        try {
          const body = { title, auth_id, publication_year, pages, price, pub_id };
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
        <div>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${book.id}`}
      >
        Edit
      </button>
      <div
        class="modal"
        id={`id${book.id}`}
        onClick={() => setTitle(book.title)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Update Book Data</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setTitle(book.title)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateTitle(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setTitle(todo.title)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
};

export default Edit;