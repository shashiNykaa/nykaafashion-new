import cs from 'classnames';
import ProductCard from './productCard';

const ProductListingDesktop = ({ pid, slug, listData} :any) => {
  const { products = [] } = listData;
  return (
    <>
      <h1>ProductListingDesktop: {pid}{slug}</h1>
      <div className={cs('grid grid-cols-3 gap-4')}>
        { products?.length > 0 ? products.map((productDetail :any, index: number) => <ProductCard key={index} data={productDetail}></ProductCard>) : <>No Products Found</>}
      </div>
    </>
  )
}

export default ProductListingDesktop;