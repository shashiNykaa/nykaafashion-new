import { useRouter } from "next/router";
import {
  ErrorBoundary,
  Desktop,
  Mobile,
  ProductListingMobile,
  ProductListingDesktop,
} from "../../../components";
import { apiCall, urls } from "../../../util";


const Listing = ({items}) => {
  const router = useRouter(),
    { pid, slug } = router.query;

  return (
    <ErrorBoundary>
      <Desktop>
        <ProductListingDesktop pid={pid} slug={slug} listData={items}/>
      </Desktop>
      <Mobile>
        <ProductListingMobile pid={pid} slug={slug} listData={items}/>
      </Mobile>
    </ErrorBoundary>
  );
};


export async function getServerSideProps(context) {
  const { ptype, slug, lid } = context.query,
   url = `${process.env.BASE_API_PLP_URL}/${urls['LISTING']}?categoryId=${lid}`,
   response = await apiCall('GET', url),
   listData = response.status === 'success' ? response?.response : [];
  return {
    props: {
      items: listData
    },
  }
}
export default Listing;
