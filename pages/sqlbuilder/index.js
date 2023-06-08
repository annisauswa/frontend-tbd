import Link from 'next/link'
const SqlBuilder = () => {
  const [sqlbuilder, setSqlbuilder] = useState([])
  const sql = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/sql",{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({queries})
      });
      
      if(!response.ok){
        throw new Error('Failed to fetch!');
      }
      const result = await res.json();
      setSqlbuilder(result);
      console.log(result);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    SqlBuilder();
  }, []);

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
        <h1>SQL BUILDER</h1>
            <form>
            <input
                type="text"
                placeholder="write your query here"
                className="input-lg w-full rounded-lg"
            />
            </form>
            <button className="btn btn-primary">Execute</button>
            <textarea readonly className='rounded-lg p-[20px]'>{sqlbuilder}</textarea>
        </div>
    </div>
  )
}

export default SqlBuilder