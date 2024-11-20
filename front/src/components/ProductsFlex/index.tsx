import React from 'react'
import ProductCard from '../ProductsCard'
import { IProduct, IProductsGridProps } from '@/interfaces/Interfaces'

export default function ProductsGridComponent({products}: IProductsGridProps) {
  return (
    <div className='grid grid-cols-1 gap-4 p-4 max-w-screen-xl mx-auto'>
     {products && products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {products.map((product: IProduct) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No products available</p>
      )}
    </div>
  )
}
