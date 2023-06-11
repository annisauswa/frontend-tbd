import { useState } from 'react'

const SqlBuilder = () => {
  const [query, setQuery] = useState([])
  const [result, setResult] = useState('');
  const Querybuild = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/sql",{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({queries: query })
    });
    console.log(JSON.stringify({queries: query }));
      
      if(!res.ok){
        throw new Error('Failed to fetch!');
      }
      const data = await res.json();
      console.log(JSON.stringify({queries: query }));
      setResult(data);
      console.log(data);
    } catch (err) {
      console.error(err.message);
      setResult(err.message);
    }
  };

  const handleSubmitQuery = (e) => {
    e.preventDefault();
    Querybuild();
  };

  return (
    <div >
        <h1 className='text-black text-center font-bold text-xl'>SQL BUILDER</h1>
            <form onSubmit={handleSubmitQuery}>
              <textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="text"
                  placeholder="write your query here"
                  className="input-lg w-full rounded-lg p-4"
              ></textarea>
              <button className="btn btn-primary" type="submit">Execute</button>
            </form>
            <div>
              <pre className=' bg-[#403c3c] text-white w-full h-[500px] overflow-auto rounded-lg p-8'>{JSON.stringify(result, null, 2)}</pre>
            </div>
    </div>
  )
}

export default SqlBuilder