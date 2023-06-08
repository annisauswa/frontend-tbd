export const getStaticProps = async () => {
    const res = await fetch("http://localhost:3001/api/store");
    const data = await res.json();
  
    return {
      props: {store: data },
    };
  };

export default function Store({ store }) {
    var heading = ["id", "manager_staff_id", "address_id", "Last Update"];
    return(
        <div>
            <table class="wrapper text-black">
        <thead>
          <tr>
            {heading.map((head) => (
              <th key={head}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {store.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.auth_id}</td>
              <td>{item.publication_year}</td>
              <td>{item.pages}</td>
              <td>{item.price}</td>
              <td>{item.pub_id}</td>
              <td>{item.last_update}</td>
            </tr>
        ))}
        </tbody>
      </table>
        </div>
    )
}