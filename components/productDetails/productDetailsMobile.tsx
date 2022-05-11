import cs from 'classnames';

const ProductDetailsMobile = ({ details }: any) => {
  const { id } = details?.product;
  return <p>ProductDetailsDesktop : {id}</p>;
}

export default ProductDetailsMobile;