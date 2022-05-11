import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import LazyHydrate from "react-lazy-hydration";
import { Desktop, Mobile } from "../../../components";
import { apiCall, urls } from "../../../util";
const ErrorBoundary = dynamic(
  () => import("../../../components/ErrorBoundary")
);
const ProductListingDesktop = dynamic(
  () => import("../../../components/productListing/productListingDesktop")
);
const ProductListingMobile = dynamic(
  () => import("../../../components/productListing/productListingMobile")
);

const Listing = ({ items }: any) => {
  const router = useRouter(),
    { pid, slug } = router.query;

  return (
    <ErrorBoundary>
      <LazyHydrate whenVisible>
        <Desktop>
          <ProductListingDesktop pid={pid} slug={slug} listData={items} />
        </Desktop>
      </LazyHydrate>
      <LazyHydrate whenVisible>
        <Mobile>
          <ProductListingMobile pid={pid} slug={slug} listData={items} />
        </Mobile>
      </LazyHydrate>
    </ErrorBoundary>
  );
};

export async function getServerSideProps(context: any) {
  const { ptype, slug, lid } = context.query,
    url = `${process.env.BASE_API_PLP_URL}/${urls["LISTING"]}?categoryId=${lid}`,
    response = await apiCall("GET", url),
    listData = response.status === "success" ? response?.response : [];
  return {
    props: {
      items: listData,
    },
  };
}
export default Listing;
