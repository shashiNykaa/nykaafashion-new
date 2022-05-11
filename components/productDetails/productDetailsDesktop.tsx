import cs from "classnames";
import Image from "next/image";

const ProductDetailsDesktop = ({ details, type = "" }: any) => {
  const { id, imageUrl, productMedia, discountedPrice, sizeOptions } =
    details?.product;
  return (
    <>
      <p>ProductDetailsDesktop : {id}</p>
      <div className={cs("grid grid-rows-3 grid-flow-col gap-4")}>
        <div className={cs("row-span-3")}>
          <div className={cs("grid-rows-1 grid-cols-1")}>
            <div className={cs("flex flex-col overflow-auto")}>
              {productMedia?.length > 0 ? (
                productMedia.map(({ url, id }: any) => (
                  <div key={id} className={cs("flex justify-end")}>
                    <Image
                      src={url}
                      alt="Product Image"
                      width={type === "mobile" ? 100 : 50}
                      height={type === "mobile" ? 200 : 70}
                    />
                  </div>
                ))
              ) : (
                <>No Image to show</>
              )}
            </div>
          </div>
        </div>
        <div className={cs("row-span-3")}>
          <Image
            src={imageUrl}
            alt="Product Image"
            width={type === "mobile" ? 100 : 200}
            height={type === "mobile" ? 200 : 350}
          />
        </div>
        <div className={cs("col-span-2")}>
          <div>See Designs</div>
          <div>{discountedPrice}</div>
          <div>
            Select Size{" "}
            <div className={cs("flex flex-row justify-between")}>
              {sizeOptions?.options?.length > 0 ? (
                sizeOptions?.options?.map(({ sizeName, id }: any) => (
                  <span key={id}>{sizeName}</span>
                ))
              ) : (
                <>NA</>
              )}
            </div>
          </div>
        </div>
        <div className={cs("row-span-2 col-span-2")}>
          <h1>Offers For You</h1>
          <></>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsDesktop;
