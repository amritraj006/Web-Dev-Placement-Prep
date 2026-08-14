import { useState, useEffect } from 'react';

const ApiCall = () => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='w-full max-w-3xl mx-auto border md:px-10 px-4 py-2'>
      <h3 className='text-center text-2xl font-medium mb-5'>Posts</h3>

      <div className='flex w-full gap-2 my-5'>
        <label className='text-lg' htmlFor='post'>
          Set Limit:
        </label>

        <input
          id='post'
          className='border border-gray-500 px-2'
          placeholder='Set Limit'
          type='number'
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
        />
      </div>

      {!loading ? (
        <div className='flex flex-col space-y-3 w-full max-w-xl mx-auto'>
          {limit > data.length ? (
            <p>Limit exceeds the number of posts available.</p>
          ) : (
            <ul>
              {data.slice(0, limit).map((post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <p>Fetching...</p>
      )}
    </div>
  );
};

export default ApiCall;