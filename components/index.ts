import ErrorBoundary from "./ErrorBoundary";
import { useIsDesktop, Desktop, Mobile } from "./global";
import { ProductListingDesktop, ProductListingMobile } from "./productListing";
import { ProductDetailsDesktop, ProductDetailsMobile } from "./productDetails";
import { MainLayout, AnalyticsInitialize } from "./common";

// eslint-disable-next-line import/no-anonymous-default-export
export {
  ErrorBoundary,
  useIsDesktop,
  Desktop,
  Mobile,
  ProductListingDesktop,
  ProductListingMobile,
  ProductDetailsMobile,
  ProductDetailsDesktop,
  MainLayout,
  AnalyticsInitialize,
};
