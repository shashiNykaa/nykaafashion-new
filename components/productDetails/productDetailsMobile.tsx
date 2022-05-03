import { useRouter } from 'next/router';
import { useIsDesktop } from ''

const ProductDetailsMobile = () => {
  const router = useRouter()
  const { pid, slug } = router.query;
  
  return (
  <p>
    ProductDetailsMobile: {pid}{slug}
  </p>
  )
}

export default ProductDetailsMobile;