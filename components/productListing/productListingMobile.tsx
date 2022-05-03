import cs from 'classnames';
import ProductCard from './productCard';

const ProductListingMobile = ({ pid, slug, listData}) => { 
  const { products = [] } = listData; 
  return (
    <>
      ProductListingMobile: {pid}{slug}
      <div className={cs('grid grid-cols-2 gap-4')}>
        { products?.length > 0 ? products.map((productDetail, index) => <ProductCard key={index} data={productDetail} type={'mobile'}></ProductCard>) : <>No Products Found</>}
      </div>
    </>
  )
}

export default ProductListingMobile;