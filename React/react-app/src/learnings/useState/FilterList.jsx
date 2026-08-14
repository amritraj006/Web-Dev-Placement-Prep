import { useState, useMemo } from 'react';

export default function FilterList() {
  const [search, setSearch] = useState('');

  const fruits = [
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Grapes',
    'Pineapple',
    'Watermelon',
    'Kiwi',
  ];

  const filteredList = useMemo(() => {
    return fruits.filter((fruit) =>
      fruit.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div>
      <h2>Filter List</h2>

      <input
        type="text"
        placeholder="Search fruit..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredList.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}