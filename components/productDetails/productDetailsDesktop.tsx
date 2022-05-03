import { useRouter } from 'next/router';
import { useIsDesktop } from ''

const ProductDetailsDesktop = () => {
  const router = useRouter()
  const { pid, slug } = router.query;
  
  return (
  <p>
    ProductDetailsDesktop {pid}{slug}
  </p>
  )
}

export default ProductDetailsDesktop;