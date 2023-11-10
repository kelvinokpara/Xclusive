import React, { useContext, useEffect } from "react";
import SectionHead from "../SectionHead/SectionHead";
import { GlobalContext } from "../../../context";
import Product from "../../product_tab/product";
import { BsEye } from "react-icons/bs";
import Rating from "../../rating/Rating";

const FlashSales = () => {
  const { products, getProducts } = useContext(GlobalContext);
  useEffect(() => {
    if (!products || products.length === 0) {
      getProducts();
    }
  }, [products]);
  return (
    <div className="w-full flex flex-col gap-10">
      <SectionHead topic={"Today's"} label={"Flash Sales"} />

      <div className="prod-con">
        {products &&
          products
            .slice(0, 5)
            .map((data, id) => (
              <Product
                key={id}
                prod_icon={<BsEye />}
                prod_rating={<Rating />}
                product={data}
                id={data.id}
                title={data.title}
                price={data.price}
                product_img={data.image}
                desc={data.title}
                isFyp={true}
                isWishlist={false}
              />
            ))}
      </div>
    </div>
  );
};

export default FlashSales;
