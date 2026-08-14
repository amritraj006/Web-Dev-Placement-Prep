import React from 'react'
import { useMemo } from 'react'

const FilteredList = ({products, searchQuery}) => {
    const filteredProducts = products.filter((product) => {
        return product.toLowerCase().includes(searchQuery.toLowerCase())
    })

    const result = useMemo(() => {
        return filteredProducts
    }, [filteredProducts, searchQuery])

  return (
    <div>
      {result.map((product, index) => (
        <div key={index}>{product}</div>
      ))}
    </div>
  )
}

export default React.memo(FilteredList)