import React from "react";
import Link from "next/link";
import cs from "classnames";
import Image from "next/image";

const ProductCard = ({ data, type='' } : any) => {
  return (
    <div className={cs("hover:shadow-md m-8")}>
      <Link href={data?.actionUrl} passHref>
        <div className={cs("flex flex-col")}>
          <div className={cs("")}>
            <Image
              src={data?.imageUrl}
              alt="Product Image"
              width={type ==='mobile' ? 100 : 200}
              height={type ==='mobile' ? 200 : 350}
            />
          </div>
          <div className={cs("flex flex-1 flex-col")}>
            <div className={cs("font-semibold")}>{data?.title}</div>
            <div className={cs()}>
              {data?.discountedPrice}
              <span className={cs("line-through ml-2")}>
                {data?.price}
              </span>
            </div>
            <div className={cs()}></div>
            <div className={cs("text-sm")}>
              {data?.sizeVariation &&
                data?.sizeVariation.map(({ title = "", id = "" }) => (
                  <span key={id} data-id={id}>
                    {title}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default React.memo(ProductCard);
