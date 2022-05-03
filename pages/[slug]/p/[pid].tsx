import { useRouter } from "next/router";
import {
  ErrorBoundary,
  Desktop,
  Mobile,
  ProductDetailsMobile,
  ProductDetailsDesktop,
} from "../../../components";

const Listing = () => {
  const router = useRouter(),
    { pid, slug } = router.query;

  return (
    <ErrorBoundary>
      <Desktop>
        <ProductDetailsDesktop pid={pid} slug={slug} />
      </Desktop>
      <Mobile>
        <ProductDetailsMobile pid={pid} slug={slug} />
      </Mobile>
    </ErrorBoundary>
  );
};

export default Listing;
