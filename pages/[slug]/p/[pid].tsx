import { useRouter } from "next/router";
import LazyHydrate from "react-lazy-hydration";
import dynamic from "next/dynamic";
import { Desktop, Mobile } from "../../../components";
import { apiCall, urls } from "../../../util";
const ErrorBoundary = dynamic(
  () => import("../../../components/ErrorBoundary")
);
const ProductDetailsDesktop = dynamic(
  () => import("../../../components/productDetails/productDetailsDesktop")
);
const ProductDetailsMobile = dynamic(
  () => import("../../../components/productDetails/productDetailsMobile")
);

const ProductDetails = ({ pid, slug, details }: any) => {
  console.log(details);
  return (
    <ErrorBoundary>
      <LazyHydrate whenVisible>
        <Desktop>
          <ProductDetailsDesktop
            pid={pid}
            slug={slug}
            details={details}
          />
        </Desktop>
      </LazyHydrate>
      <LazyHydrate whenVisible>
        <Mobile>
          <ProductDetailsMobile pid={pid} slug={slug} details={details}/>
        </Mobile>
      </LazyHydrate>
    </ErrorBoundary>
  );
};

export async function getServerSideProps(context: any) {
  const { ptype, slug, pid } = context.query,
    url = `${process.env.BASE_API_PLP_URL}/${urls["PDP_V3_ID"]}/${pid}`,
    response = await apiCall("GET", url),
    productDetails = response.status === "success" ? response?.response : [];
    console.log('contectx', url);
  return {
    props: {
      details: productDetails,
    },
  };
}
export default ProductDetails;
