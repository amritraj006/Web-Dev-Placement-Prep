import React from 'react'
import FilteredList from './FilteredList'

const Render = () => {
    const [searchQuery, setSearchQuery] = React.useState('')
    const products = [
        'phone',
        'laptop',
        'tablet',
        'monitor',
        'keyboard',
        'mouse'
    ]

  return (
    <div>
        <input type="text" placeholder="Search products..."  onChange={(e) => setSearchQuery(e.target.value)}/>
        <FilteredList products={products} searchQuery={searchQuery} />
    </div>
  )
}

export default Render