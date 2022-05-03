import { useState } from 'react';
import cs from 'classnames';
import ProductCard from './productCard';

const ProductListingDesktop = ({ pid, slug, listData}) => {
  const { products = [] } = listData;
  return (
    <>
      ProductListingDesktop: {pid}{slug}
      <div className={cs('grid grid-cols-3 gap-4')}>
        { products?.length > 0 ? products.map((productDetail, index) => <ProductCard key={index} data={productDetail}></ProductCard>) : <>No Products Found</>}
      </div>
    </>
  )
}

export default ProductListingDesktop;